import {create} from "zustand";


export type Todo = {
    id: number,
    title: string,
    isComplete: boolean,
}

type TodoStore = {
    todoList : Array<Todo>
}


export const useTodoStore = create<TodoStore>(() => ({
    todoList: [
        {id: 1, title: "Initial todo...", isComplete: true},
        {id: 2, title: "Gardening", isComplete: false},
        {id: 3, title: "Something", isComplete: false}]
}))