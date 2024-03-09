import { SquarePen, Trash } from 'lucide-react'
import { Reorder } from 'framer-motion'

import { TodoType } from '@/types'

type TodoItemProps = {
  todo: TodoType
  onChange: () => void
  onDelete: () => void
  openModal: () => void
}

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -100,
  },
}

export const TodoItem = ({
  todo,
  onChange,
  onDelete,
  openModal,
}: TodoItemProps) => {
  return (
    <Reorder.Item
as="li"
      {...variants}
      value={todo}
      whileDrag={{
        scale: 1.1,
        boxShadow: 'rgba(0,0,0.0.12) 0px 1px 3px, rgba(0,0,0,0.24) 0px 2px 2px',
      }}
      onDoubleClick={onDelete}
      className="cursor-pointer rounded-lg border border-[hsl(33,10%,45%)] bg-[hsl(0,0%,12%)] p-2.5"
    >
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
    </Reorder.Item>
  )
}
