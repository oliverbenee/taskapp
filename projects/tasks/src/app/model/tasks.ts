export type TaskType = 'daily' | 'weekly' | 'other'

export interface Task {
  type: TaskType
  description: string
  completed: boolean
}