type ResultProps = {
  completedTodos: number
  totalTodos: number
}

export const Result = ({ completedTodos, totalTodos }: ResultProps) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-primary p-8">
      <div className="flex flex-col -space-y-1">
        <h1 className="text-lg font-bold tracking-widest">Todo Done</h1>
        <span className="text-sm font-light tracking-wide">Keep it up</span>
      </div>

      <div className="flex size-24 items-center justify-center rounded-full bg-secondary">
        {totalTodos ? (
          <p className="text-2xl font-extrabold text-dark">
            {completedTodos} / {totalTodos}
          </p>
        ) : (
          <p className="text-sm font-extrabold text-dark">No todos</p>
        )}
      </div>
    </div>
  )
}
