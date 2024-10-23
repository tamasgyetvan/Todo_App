import "./App.module.css";

import { Header } from "./components/Header/Header";
import { TodoCreator } from "./components/TodoCreator/TodoCreator";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { useTodoStore } from "./store";
function App() {
  const todoList = useTodoStore((state) => state.todoList);
  return (
    <>
      <Wrapper>
        <Header />
        <TodoCreator />
      </Wrapper>
      {todoList.map((todo) => (
        <span>{todo.title}</span>
      ))}
    </>
  );
}

export default App;
