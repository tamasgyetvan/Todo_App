import { useTodoStore } from "../../store";
import styles from "./filter.module.css";
type FilterProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export function Filter({ handleClick }: FilterProps) {
  const options = ["all", "active", "completed"];
  const todoList = useTodoStore((state) => state.todoList);
  const activeItems = todoList.filter((todo) => todo.isComplete != true);

  return (
    <section className={styles.filter}>
      <p>{activeItems.length} items left</p>
      <div>
        {options.map((option) => (
          <button
            type="button"
            className={styles.filterButton}
            data-filter={option}
            onClick={handleClick}
          >
            {option}
          </button>
        ))}
      </div>
      <button type="button" className={styles.clearButton}>
        Clear completed
      </button>
    </section>
  );
}
