export interface TaskList {
  total: number
  completed: number
  todo: number
  summary: Task[]
}

type taskType = 'daily' | 'weekly' | 'other'

export interface Task {
  type: taskType
  description: string
  completed: boolean
}