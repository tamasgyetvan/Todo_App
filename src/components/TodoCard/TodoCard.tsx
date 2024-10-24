import { Todo } from "../../store";
import styles from "./todocard.module.css";
type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  return (
    <div className={styles.card}>
      <input type="checkbox" id="" checked={todo.isComplete} />
      <h2 className={styles.title}>{todo.title}</h2>
      <button className={styles.closeButton} type="button">
        <img src="/icon-cross.svg" alt="" />
      </button>
    </div>
  );
}
