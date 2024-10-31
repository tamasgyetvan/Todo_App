import { Todo } from "../../store";
import { TodoCard } from "../TodoCard/TodoCard";
import styles from "./todolist.module.css";

type TodoListProps = {
  todoList: Todo[];
  filter: string | null;
};
export function TodoList({ todoList, filter }: TodoListProps) {
  if (filter === "completed") {
    return (
      <section className={styles.container}>
        {todoList.map((todo: Todo) =>
          todo.isComplete == true ? (
            <TodoCard key={todo.id} todo={todo} />
          ) : null
        )}
      </section>
    );
  }
  if (filter === "all") {
    return (
      <section className={styles.container}>
        {todoList.map((todo: Todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </section>
    );
  }

  if (filter === "active") {
    return (
      <section className={styles.container}>
        {todoList.map((todo: Todo) =>
          todo.isComplete == true ? null : (
            <TodoCard key={todo.id} todo={todo} />
          )
        )}
      </section>
    );
  }
}
