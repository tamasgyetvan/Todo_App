import { useTodoStore } from "../../store";
import styles from "./filter.module.css";
type FilterProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  currentFilter: string | null;
};
export function Filter({ handleClick, currentFilter }: FilterProps) {
  const options = ["all", "active", "completed"];
  const todoList = useTodoStore((state) => state.todoList);
  const activeItems = todoList.filter((todo) => todo.isComplete != true);
  const clearCompletedTodos = useTodoStore(
    (state) => state.clearCompletedTodos
  );
  return (
    <section className={styles.filter}>
      <p>{activeItems.length} items left</p>
      <div>
        {options.map((option) => (
          <button
            type="button"
            className={
              currentFilter == option
                ? styles.filterButtonActive
                : styles.filterButton
            }
            data-filter={option}
            onClick={handleClick}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={styles.clearButton}
        onClick={clearCompletedTodos}
      >
        Clear completed
      </button>
    </section>
  );
}
