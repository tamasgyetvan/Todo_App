import {create} from "zustand";

import {v4 as uuidv4} from "uuid"


const id = uuidv4()
console.log(id)

export type Todo = {
    id: string,
    title: string,
    isComplete: boolean,
}


type TodoStore = {
    todoList : Todo[]
    createTodo: (title: string) => void;
    deleteTodo: () => void;
}

//set function is used to update the state
export const useTodoStore = create<TodoStore>((set) => ({
    todoList: [
        ],
        createTodo: (title: string) => {
           set((state) => ({
            todoList: [...state.todoList,
            {
                id: id,
                title: title,
                isComplete: false

            }]
           }))
        },
        deleteTodo: () => {}
}))