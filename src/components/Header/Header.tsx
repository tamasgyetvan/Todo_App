import styles from "./header.module.css";

type HeaderProps = {
  theme: string;
  switchTheme: () => void;
};
export function Header({ theme, switchTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>TODO</h1>
      <button className={styles.button} onClick={switchTheme} type="button">
        <img
          src={theme == "dark" ? "/icon-sun.svg" : "/icon-moon.svg"}
          alt="Color Mode Toggle Button"
        />
      </button>
    </header>
  );
}
