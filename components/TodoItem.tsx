import { SquarePen, Trash } from 'lucide-react'

import { TodoType } from '@/types'

type TodoItemProps = {
  todo: TodoType
  onChange: () => void
  onDelete: () => void
  openModal: () => void
}

export const TodoItem = ({
  todo,
  onChange,
  onDelete,
  openModal,
}: TodoItemProps) => {
  return (
    <li className="rounded-lg border border-[hsl(33,10%,45%)] bg-[hsl(0,0%,12%)] p-2.5">
      <div className="flex items-center justify-between space-x-2  px-2">
        <label className="flex cursor-pointer items-center justify-center">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            className="peer hidden"
            onChange={onChange}
          />
          <span className="inline-block aspect-square size-4 rounded-full border border-secondary peer-checked:border-green peer-checked:bg-green"></span>
        </label>
        <p
          className={`${todo.isCompleted && 'line-through decoration-2'} flex-1`}
        >
          {todo.todo}
        </p>
        <div className="flex items-center space-x-3">
          <button onClick={openModal}>
            <SquarePen className="size-5 text-[hsl(33,10%,45%)] transition-colors hover:text-primary" />
          </button>
          <button onClick={onDelete}>
            <Trash className="size-5 text-[hsl(33,10%,45%)] transition-colors hover:text-primary" />
          </button>
        </div>
      </div>
    </li>
  )
}
