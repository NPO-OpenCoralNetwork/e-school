import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

interface TaskData {
  ID: string
  Team: string
  Title: string
  Description: string
  Status: string
  Estimate: string
  Priority: string
  'Project ID': string
  Project: string
  Creator: string
  Assignee: string
  Labels: string
  'Cycle Number': string
  'Cycle Name': string
  'Cycle Start': string
  'Cycle End': string
  Created: string
  Updated: string
  Started: string
  Triaged: string
  Completed: string
  Canceled: string
  Archived: string
  'Due Date': string
  'Parent issue': string
  Initiatives: string
  'Project Milestone ID': string
  'Project Milestone': string
  'SLA Status': string
  Roadmaps: string
}

export async function GET(request: NextRequest) {
  try {
    const csvFilePath = path.join(process.cwd(), '..', 'Export Sun Aug 17 2025.csv')
    
    if (!fs.existsSync(csvFilePath)) {
      return NextResponse.json({ error: 'CSV file not found' }, { status: 404 })
    }

    const csvContent = fs.readFileSync(csvFilePath, 'utf-8')
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    }) as TaskData[]

    // データを整形
    const tasks = records.map(record => ({
      id: record.ID,
      team: record.Team,
      title: record.Title,
      description: record.Description || '',
      status: record.Status,
      estimate: record.Estimate || '',
      priority: record.Priority || 'No priority',
      projectId: record['Project ID'],
      project: record.Project || '',
      creator: record.Creator,
      assignee: record.Assignee || '',
      labels: record.Labels || '',
      created: record.Created,
      updated: record.Updated,
      started: record.Started || '',
      completed: record.Completed || '',
      dueDate: record['Due Date'] || '',
      parentIssue: record['Parent issue'] || '',
      initiatives: record.Initiatives || ''
    }))

    return NextResponse.json({
      success: true,
      data: tasks,
      total: tasks.length
    })

  } catch (error) {
    console.error('Error reading CSV:', error)
    return NextResponse.json(
      { error: 'Failed to read CSV file' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { filters } = await request.json()
    
    const csvFilePath = path.join(process.cwd(), '..', 'Export Sun Aug 17 2025.csv')
    const csvContent = fs.readFileSync(csvFilePath, 'utf-8')
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    }) as TaskData[]

    let filteredTasks = records.map(record => ({
      id: record.ID,
      team: record.Team,
      title: record.Title,
      description: record.Description || '',
      status: record.Status,
      priority: record.Priority || 'No priority',
      project: record.Project || '',
      assignee: record.Assignee || '',
      created: record.Created,
      updated: record.Updated
    }))

    // フィルタリング
    if (filters?.status) {
      filteredTasks = filteredTasks.filter(task => task.status === filters.status)
    }
    if (filters?.priority) {
      filteredTasks = filteredTasks.filter(task => task.priority === filters.priority)
    }
    if (filters?.project) {
      filteredTasks = filteredTasks.filter(task => task.project === filters.project)
    }
    if (filters?.search) {
      const searchTerm = filters.search.toLowerCase()
      filteredTasks = filteredTasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm)
      )
    }

    return NextResponse.json({
      success: true,
      data: filteredTasks,
      total: filteredTasks.length
    })

  } catch (error) {
    console.error('Error filtering tasks:', error)
    return NextResponse.json(
      { error: 'Failed to filter tasks' },
      { status: 500 }
    )
  }
}