export const TodoForm = ({ createTodo }: any) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    const formData = new FormData(form)
    const content = formData.get('content')

    const newTodo = {
      id: crypto.randomUUID(),
      todo: content,
      isCompleted: false,
    }

    createTodo(newTodo)

    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex items-center space-x-4">
        <input
          type="text"
          aria-invalid="false"
          name="content"
          className="input__filed"
          placeholder="write your next task"
        />
        <button className="outine-none size-10 rounded-full border-none bg-secondary font-bold text-dark">
          +
        </button>
      </div>
    </form>
  )
}
