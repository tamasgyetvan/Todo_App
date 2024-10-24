import {create} from "zustand";

import {v4 as uuidv4} from "uuid"

export type Todo = {
    id: string,
    title: string,
    isComplete: boolean,
}


type TodoStore = {
    todoList : Todo[]
    createTodo: (title: string) => void;
    deleteTodo: (id: string) => void;
}

//set function is used to update the state
export const useTodoStore = create<TodoStore>((set) => ({
    todoList: [
        ],
        createTodo: (title: string) => {
           set((state) => ({
            todoList: [...state.todoList,
            {
                id: uuidv4(),
                title: title,
                isComplete: false

            }]
           }))
        },
        deleteTodo: (id: string) => {
            set((state) => ({
                todoList: state.todoList.filter((todo) => todo.id != id)
            }))
        }
}))