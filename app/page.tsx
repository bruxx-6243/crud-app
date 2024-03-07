'use client'

import { useState } from 'react'

import { Result } from '@/components/Result'
import { TodoForm } from '@/components/TodoForm'
import { TodoList } from '@/components/TodoList'
import { TodoModal } from '@/components/TodoModal'

import { TodoType } from '@/types'

export default function HomePage() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [activeTodo, setActiveTodo] = useState<TodoType | null>(null)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const completedTodos = todos.filter((todo) => todo.isCompleted).length
  const totalTodos = todos.length

  const createTodo = (newTodo: TodoType) => {
    if (!newTodo) return

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const updateTodo = (updatedContent: string) => {
    if (activeTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === activeTodo.id ? { ...todo, todo: updatedContent } : todo,
      )
      setTodos(updatedTodos)
      setActiveTodo(null)
    }

    closeModal()
  }

  return (
    <>
      <div className="container flex flex-col space-y-8">
        <Result completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoForm createTodo={createTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          openModal={(id: string) => {
            const todo = todos.find((todo) => todo.id === id)
            setActiveTodo(todo ?? null)
            openModal()
          }}
        />
      </div>

      {isModalOpen && (
        <TodoModal
          closeModal={closeModal}
          updateTodo={updateTodo}
          activeTodo={activeTodo}
        />
      )}
    </>
  )
}
