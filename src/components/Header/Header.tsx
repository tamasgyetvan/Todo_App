import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>TODO</h1>
      <button className={styles.button} type="button">
        <img src="/icon-sun.svg" alt="Color Mode Toggle Button" />
      </button>
    </header>
  );
}
