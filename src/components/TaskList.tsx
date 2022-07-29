import React, { memo } from 'react'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { TaskItem } from './TaskItem'

const TaskList: React.FC = () => {
  const { status, data } = useQueryTasks()
  console.log('rendered TaskList')

  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>

  return <div></div>
}

export default TaskList
