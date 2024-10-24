import "./App.module.css";

import { Header } from "./components/Header/Header";
import { TodoCreator } from "./components/TodoCreator/TodoCreator";
import { TodoList } from "./components/TodoList/TodoList";
import { Wrapper } from "./components/Wrapper/Wrapper";
function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <TodoCreator />
      </Wrapper>
      <TodoList />
    </>
  );
}

export default App;
