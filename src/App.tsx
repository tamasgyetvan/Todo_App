import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TodoCreator } from "./components/TodoCreator/TodoCreator";
import { TodoList } from "./components/TodoList/TodoList";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Filter } from "./components/Filter/Filter";
import useLocalStorage from "use-local-storage";

function App() {
  const [filter, setFilter] = useState<string | null>("all");
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  function handleFilterChange(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    setFilter(target.getAttribute("data-filter"));
  }

  return (
    <div className={styles.app} data-theme={theme}>
      <Wrapper>
        <Header theme={theme} switchTheme={switchTheme} />
        <TodoCreator />
      </Wrapper>
      <TodoList filter={filter} />
      <Filter handleClick={handleFilterChange} currentFilter={filter} />
    </div>
  );
}

export default App;
