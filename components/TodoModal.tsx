'use client'

import { useState, useEffect, useRef } from 'react'

export const TodoModal = ({ closeModal, updateTodo, activeTodo }: any) => {
  const [updatedContent, setUpdatedContent] = useState(
    activeTodo ? activeTodo.todo : '',
  )

  const InputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    InputRef.current?.focus()
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    updateTodo(updatedContent)
    closeModal()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedContent(event.target.value)
  }

  return (
    <div className="animate-open-modal absolute inset-0 h-screen bg-slate-800/70 transition-all">
      <div className="flex justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="animate-fade-modal w-full max-w-md  space-y-8 rounded-xl bg-dark p-6 "
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
