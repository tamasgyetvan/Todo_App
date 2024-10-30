import styles from "./filter.module.css";
type FilterProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export function Filter({ handleClick }: FilterProps) {
  return (
    <section className={styles.filter}>
      <p>5 items left</p>
      <div>
        <button type="button" data-filter="all" onClick={handleClick}>
          All
        </button>
        <button type="button" data-filter="activeOnly" onClick={handleClick}>
          Active
        </button>
        <button type="button" data-filter="completeOnly" onClick={handleClick}>
          Completed
        </button>
      </div>
      <button>Clear completed</button>
    </section>
  );
}
