'use client'

import { useState } from 'react'
import { Reorder, AnimatePresence } from 'framer-motion'

import { TodoItem } from '@/components/TodoItem'
import { TodoType } from '@/types'

type TodoListPropos = {
  todos: TodoType[]
  setTodos: (todos: TodoType[]) => void
  openModal: (id: string) => void
}

export const TodoList = ({ todos, setTodos, openModal }: TodoListPropos) => {
  const [activeTodo, setActiveTodo] = useState<TodoType | null>(null)

  const handleChange = (id: string) => {
    setTodos(
      todos.map((todo: TodoType) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo: TodoType) => todo.id !== id))
  }

  const handleOpenModal = (id: string) => {
    const activeTodo = todos.find((todo: TodoType) => todo.id === id)

    if (activeTodo) {
      setActiveTodo(activeTodo)
    }

    openModal(id)
  }

  return (
    <Reorder.Group
      as="ul"
      axis="y"
      values={todos}
      onReorder={setTodos}
      className="flex flex-col space-y-4"
    >
      <AnimatePresence initial={false}>
        {todos.map((todo: TodoType) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={() => handleChange(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            openModal={() => handleOpenModal(todo.id)}
          />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  )
}
