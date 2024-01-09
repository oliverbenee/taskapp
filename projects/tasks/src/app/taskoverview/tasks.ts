type taskType = 'daily' | 'weekly' | 'other'

export interface Task {
  type: taskType
  description: string
  completed: boolean
}