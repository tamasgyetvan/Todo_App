import { useState } from "react";
import "./App.module.css";
import { Header } from "./components/Header/Header";
import { TodoCreator } from "./components/TodoCreator/TodoCreator";
import { TodoList } from "./components/TodoList/TodoList";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Filter } from "./components/Filter/Filter";
import { useTodoStore } from "./store";

function App() {
  const [filter, setFilter] = useState<string | null>("all");
  const todoList = useTodoStore((state) => state.todoList);

  function handleFilterChange(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    setFilter(target.getAttribute("data-filter"));
  }

  return (
    <>
      <Wrapper>
        <Header />
        <TodoCreator />
      </Wrapper>
      <TodoList todoList={todoList} filter={filter} />
      <Filter handleClick={handleFilterChange} currentFilter={filter} />
    </>
  );
}

export default App;
