import { useState } from 'react'
import { TodoItem } from '@/components/TodoItem'
import { TodoType } from '@/types'

export const TodoList = ({ todos, setTodos, openModal }: any) => {
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
    setActiveTodo(todos.find((todo: TodoType) => todo.id === id))

    openModal(id)
  }

  return (
    <ul className="flex flex-col space-y-4">
      {todos.map((todo: TodoType) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onChange={() => handleChange(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          openModal={() => handleOpenModal(todo.id)}
        />
      ))}
    </ul>
  )
}
