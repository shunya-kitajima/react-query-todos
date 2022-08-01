import React, { memo, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setEditedTask, selectTask } from '../slices/todoSlice'
import { useQueryTags } from '../hooks/useQueryTags'
import { useMutateTask } from '../hooks/useMutateTask'

const TaskEdit: React.FC = () => {
  const editedTask = useAppSelector(selectTask)
  const { status, data } = useQueryTags()
  const { createTaskMutation, updateTaskMutation } = useMutateTask()
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTask.id === 0) createTaskMutation.mutate(editedTask)
    else {
      updateTaskMutation.mutate(editedTask)
    }
  }
  const tagOptions = data?.map((tag) => (
    <option key={tag.id} value={tag.id}>
      {tag.name}
    </option>
  ))

  return <div></div>
}

export default TaskEdit
