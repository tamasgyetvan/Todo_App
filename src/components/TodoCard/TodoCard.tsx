import { Todo, useTodoStore } from "../../store";
import styles from "./todocard.module.css";
type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodoStatus);

  return (
    <div className={styles.card}>
      <button
        type="button"
        id=""
        className={todo.isComplete ? styles.complete : styles.active}
        onClick={() => {
          updateTodo(todo.id);
        }}
      ></button>
      <h2 className={styles.title}>{todo.title}</h2>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
        className={styles.closeButton}
        type="button"
      >
        <img src="./icon-cross.svg" alt="" />
      </button>
    </div>
  );
}
