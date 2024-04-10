'use client'

import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { TodoType } from '@/types'

const TodoFormSChema = z.object({
  content: z.string().trim().min(3),
})

type TodoFormSChemaType = z.infer<typeof TodoFormSChema>

type CreateTodoType = {
  createTodo: (todo: TodoType) => void
}

export const TodoForm = ({ createTodo }: CreateTodoType) => {
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors },
  } = useForm<TodoFormSChemaType>({ resolver: zodResolver(TodoFormSChema) })

  const onSubmit: SubmitHandler<TodoFormSChemaType> = (data) => {
    if (!data.content.trim()) return

    const newTodo = {
      id: crypto.randomUUID(),
      todo: data.content,
      isCompleted: false,
    }

    createTodo(newTodo)
    reset()
  }

  useEffect(() => {
    setFocus('content')
  }, [setFocus])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative flex items-center space-x-4">
        <input
          {...register('content')}
          type="text"
          aria-invalid={errors.content ? 'true' : 'false'}
          className="input__filed"
          placeholder="write your next task"
        />
        <button
          type="submit"
          className="outine-none size-10 rounded-full border-none bg-secondary font-bold text-dark"
        >
          +
        </button>
      </div>
    </form>
  )
}
