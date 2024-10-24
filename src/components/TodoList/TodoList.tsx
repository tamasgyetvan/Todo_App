import { useTodoStore } from "../../store";
import { TodoCard } from "../TodoCard/TodoCard";
import styles from "./todolist.module.css";
export function TodoList() {
  const todoList = useTodoStore((state) => state.todoList);

  return (
    <section className={styles.container}>
      {todoList.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
