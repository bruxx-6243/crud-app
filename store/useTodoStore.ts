// import { create } from 'zustand'

// import { Todo } from '@/types'

// interface TodoStore {
//   todos: Todo[]
//   activeTodo: Todo | null
//   isModalOpen: boolean
//   setTodos: (todos: Todo[]) => void
//   setActiveTodo: (todo: Todo | null) => void
//   setIsModalOpen: (isOpen: boolean) => void
//   createTodo: (newTodo: Todo) => void
//   updateTodo: (updatedTodo: Todo) => void
//   deleteTodo: (id: number) => void
//   openModal: (id: number) => void
//   closeModal: () => void
// }

// export const useTodoStore = create<TodoStore>((set) => ({
//   todos: [],
//   activeTodo: null,
//   isModalOpen: false,

//   setTodos: (todos) => set({ todos }),
//   setActiveTodo: (todo) => set({ activeTodo: todo }),
//   setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),

//   createTodo: (newTodo) =>
//     set((state) => ({ todos: [...state.todos, newTodo] })),

//   updateTodo: (updatedTodo) =>
//     set((state) => ({
//       todos: state.todos.map((todo) =>
//         todo.id === updatedTodo.id ? updatedTodo : todo,
//       ),
//     })),

//   deleteTodo: (id) =>
//     set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

//   openModal: (id) => {
//     const todo = set((state) => ({
//       activeTodo: state.todos.find((todo) => todo.id === id),
//     }))
//     if (todo) {
//       set({ activeTodo: todo, isModalOpen: true })
//     }
//   },

//   closeModal: () => set({ isModalOpen: false }),
// }))
