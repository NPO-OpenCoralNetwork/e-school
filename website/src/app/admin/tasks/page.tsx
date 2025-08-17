'use client'

import { useState, useEffect } from 'react'

interface Task {
  id: string
  title: string
  description: string
  status: string
  priority: string
  project: string
  assignee: string
  created: string
  updated: string
}

const statusColors = {
  'Todo': 'bg-gray-100 text-gray-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  'Review': 'bg-yellow-100 text-yellow-800',
  'Done': 'bg-green-100 text-green-800',
  'Backlog': 'bg-purple-100 text-purple-800'
}

const priorityColors = {
  'High': 'border-l-red-500',
  'Medium': 'border-l-yellow-500',
  'Low': 'border-l-green-500',
  'No priority': 'border-l-gray-300'
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    // CSVデータを読み込む処理（後で実装）
    const mockTasks: Task[] = [
      {
        id: 'COR-42',
        title: '今週の記事を作成する',
        description: 'コンテンツ\nJFケネディに関する文書について\nOpenAI の音声合成\n中国のAIagent',
        status: 'Review',
        priority: 'No priority',
        project: 'ALLProject',
        assignee: 'coralnetwork.contact@gmail.com',
        created: 'Mon Mar 24 2025',
        updated: 'Fri Aug 08 2025'
      },
      {
        id: 'COR-7',
        title: '法人パートナーの資料請求の書類を作成する',
        description: '',
        status: 'In Progress',
        priority: 'No priority',
        project: 'ALLProject',
        assignee: 'coralnetwork.contact@gmail.com',
        created: 'Wed Mar 26 2025',
        updated: 'Thu Aug 07 2025'
      },
      {
        id: 'COR-10',
        title: 'パートナーシップ計画策定',
        description: 'パートナー候補のリストアップ、連携内容の企画、アプローチ計画',
        status: 'Todo',
        priority: 'No priority',
        project: 'ALLProject',
        assignee: 'coralnetwork.contact@gmail.com',
        created: 'Wed Mar 26 2025',
        updated: 'Thu Aug 07 2025'
      }
    ]
    setTasks(mockTasks)
    setLoading(false)
  }, [])

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(filter.toLowerCase()) ||
    task.description.toLowerCase().includes(filter.toLowerCase()) ||
    task.project.toLowerCase().includes(filter.toLowerCase())
  )

  const tasksByStatus = {
    'Backlog': filteredTasks.filter(task => task.status === 'Backlog'),
    'Todo': filteredTasks.filter(task => task.status === 'Todo'),
    'In Progress': filteredTasks.filter(task => task.status === 'In Progress'),
    'Review': filteredTasks.filter(task => task.status === 'Review'),
    'Done': filteredTasks.filter(task => task.status === 'Done')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">タスク管理ダッシュボード</h1>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="タスクを検索..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="text-sm text-gray-600">
              総タスク数: {filteredTasks.length}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {Object.entries(tasksByStatus).map(([status, statusTasks]) => (
            <div key={status} className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  {status}
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {statusTasks.length}
                  </span>
                </h3>
              </div>
              <div className="p-4 space-y-3 min-h-[200px]">
                {statusTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-3 rounded-lg border-l-4 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                      priorityColors[task.priority as keyof typeof priorityColors]
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-gray-500">{task.id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        statusColors[task.status as keyof typeof statusColors]
                      }`}>
                        {task.status}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm leading-tight">
                      {task.title}
                    </h4>
                    {task.description && (
                      <p className="text-xs text-gray-600 mb-2 line-clamp-3">
                        {task.description.slice(0, 100)}...
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{task.project}</span>
                      <span>{new Date(task.updated).toLocaleDateString('ja-JP')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">進捗サマリー</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(tasksByStatus).map(([status, statusTasks]) => (
              <div key={status} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{statusTasks.length}</div>
                <div className="text-sm text-gray-600">{status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}