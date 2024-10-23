import styles from "./todocreator.module.css";

export function TodoCreator() {
  return (
    <form className="todoCreator">
      <input
        className={styles.todoInput}
        type="text"
        name="todo"
        placeholder="Create a new todo..."
      />
    </form>
  );
}
