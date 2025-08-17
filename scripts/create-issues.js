#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse/sync')
const { execSync } = require('child_process')

const CSV_FILE = path.join(__dirname, '..', 'Export Sun Aug 17 2025.csv')

function parseCSV() {
  if (!fs.existsSync(CSV_FILE)) {
    console.error('❌ CSVファイルが見つかりません:', CSV_FILE)
    process.exit(1)
  }

  const csvContent = fs.readFileSync(CSV_FILE, 'utf-8')
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    relax_column_count: true,
    skip_records_with_error: true
  })

  return records
}

function createIssueBody(task) {
  let body = `## 📋 タスク詳細\n\n`
  
  if (task.Description) {
    body += `**説明:**\n${task.Description}\n\n`
  }
  
  body += `**プロジェクト:** ${task.Project || 'なし'}\n`
  body += `**優先度:** ${task.Priority || 'No priority'}\n`
  body += `**担当者:** ${task.Assignee || 'なし'}\n`
  body += `**作成日:** ${task.Created}\n`
  body += `**最終更新:** ${task.Updated}\n\n`
  
  if (task.Labels) {
    body += `**ラベル:** ${task.Labels}\n\n`
  }
  
  body += `---\n`
  body += `📊 **Linear ID:** ${task.ID}\n`
  body += `🔄 **ステータス:** ${task.Status}\n`
  
  return body
}

function getLabels(task) {
  const labels = []
  
  // ステータス別ラベル
  if (task.Status) {
    labels.push(`status: ${task.Status.toLowerCase().replace(' ', '-')}`)
  }
  
  // 優先度別ラベル
  if (task.Priority && task.Priority !== 'No priority') {
    labels.push(`priority: ${task.Priority.toLowerCase()}`)
  }
  
  // プロジェクト別ラベル
  if (task.Project) {
    labels.push(`project: ${task.Project.toLowerCase()}`)
  }
  
  // Linearからの移行タグ
  labels.push('linear-import')
  
  return labels
}

function createIssue(task, dryRun = false) {
  const title = `${task.ID}: ${task.Title}`
  const body = createIssueBody(task)
  const labels = getLabels(task).join(',')
  
  if (dryRun) {
    console.log(`\n📝 Issue Preview: ${title}`)
    console.log(`Labels: ${labels}`)
    console.log(`Body:\n${body}`)
    console.log('---')
    return
  }
  
  try {
    const cmd = `gh issue create --title "${title}" --body "${body}" --label "${labels}"`
    console.log(`✅ Creating issue: ${task.ID}`)
    
    const result = execSync(cmd, { encoding: 'utf-8' })
    console.log(`   ➤ ${result.trim()}`)
    
    return result.trim()
  } catch (error) {
    console.error(`❌ Failed to create issue for ${task.ID}:`, error.message)
    return null
  }
}

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run') || args.includes('-n')
  const statusFilter = args.find(arg => arg.startsWith('--status='))?.split('=')[1]
  const limitFlag = args.find(arg => arg.startsWith('--limit='))?.split('=')[1]
  const limit = limitFlag ? parseInt(limitFlag) : null
  
  console.log('🚀 Linear to GitHub Issues Creator\n')
  
  if (dryRun) {
    console.log('🔍 DRY RUN モード - 実際にはIssueを作成しません\n')
  }
  
  // CSVを解析
  console.log('📊 CSVファイルを読み込み中...')
  const tasks = parseCSV()
  console.log(`   ➤ ${tasks.length} タスクを発見\n`)
  
  // フィルタリング
  let filteredTasks = tasks
  
  if (statusFilter) {
    filteredTasks = filteredTasks.filter(task => 
      task.Status.toLowerCase() === statusFilter.toLowerCase()
    )
    console.log(`🔄 ステータス「${statusFilter}」でフィルタ: ${filteredTasks.length} タスク`)
  }
  
  if (limit) {
    filteredTasks = filteredTasks.slice(0, limit)
    console.log(`📏 最初の ${limit} タスクのみ処理`)
  }
  
  console.log(`\n📋 処理対象: ${filteredTasks.length} タスク\n`)
  
  // GitHub認証確認
  if (!dryRun) {
    try {
      execSync('gh auth status', { stdio: 'pipe' })
    } catch (error) {
      console.error('❌ GitHub CLI認証が必要です: gh auth login')
      process.exit(1)
    }
  }
  
  // Issues作成
  let created = 0
  let failed = 0
  
  for (const task of filteredTasks) {
    const result = createIssue(task, dryRun)
    
    if (dryRun) {
      continue
    }
    
    if (result) {
      created++
    } else {
      failed++
    }
    
    // レート制限対策で少し待機
    if (!dryRun) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
  
  console.log('\n✨ 完了!')
  
  if (dryRun) {
    console.log(`📝 ${filteredTasks.length} タスクのプレビューを表示しました`)
    console.log('\n実際に作成するには --dry-run フラグを外してください')
  } else {
    console.log(`✅ 作成成功: ${created} Issues`)
    if (failed > 0) {
      console.log(`❌ 失敗: ${failed} Issues`)
    }
  }
}

// Help表示
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
📚 Linear to GitHub Issues Creator

使用方法:
  node create-issues.js [オプション]

オプション:
  --dry-run, -n         実際には作成せずにプレビュー表示
  --status=STATUS       指定したステータスのタスクのみ処理
  --limit=N            最初のN個のタスクのみ処理
  --help, -h           このヘルプを表示

例:
  node create-issues.js --dry-run --status=todo --limit=5
  node create-issues.js --status="In Progress"
  node create-issues.js --limit=10
`)
  process.exit(0)
}

main().catch(console.error)