'use client'

import { useState, useEffect, useRef } from 'react'
import { TodoType } from '@/types'
import { toast } from 'sonner'

type TodoModalType = {
  closeModal: () => void
  updateTodo: (content: string) => void
  activeTodo: TodoType | null
}

export const TodoModal = ({
  closeModal,
  updateTodo,
  activeTodo,
}: TodoModalType) => {
  const [updatedContent, setUpdatedContent] = useState<string>(
    activeTodo ? activeTodo.todo : '',
  )

  const InputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    InputRef.current?.focus()
  }, [])

  useEffect(() => {
    const keypress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', keypress)

    return () => {
      document.removeEventListener('keydown', keypress)
    }
  }, [closeModal])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!InputRef.current?.value || InputRef.current?.value.length < 3) return

    updateTodo(updatedContent)
    toast.info('Task successfully updated')
    closeModal()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedContent(event.target.value)
  }

  return (
    <div className="absolute inset-0 h-screen animate-open-modal bg-slate-800/70 transition-all">
      <div className="flex justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md animate-fade-modal  space-y-8 rounded-xl bg-dark p-6 "
        >
          <input
            ref={InputRef}
            type="text"
            value={updatedContent}
            onChange={handleChange}
            name="update-content"
            className="w-full rounded-lg border border-[hsl(33,10%,45%)] bg-[hsl(0,0%,12%)] p-2.5 placeholder:text-sm placeholder:text-[hsl(33,10%,45%)]"
            placeholder="update your task"
          />
          <div className="flex items-center justify-between">
            <button
              onClick={closeModal}
              type="button"
              className="rounded bg-secondary px-4 py-2 text-sm text-dark"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-primary px-4 py-2 text-sm text-dark"
            >
              Update todo
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
