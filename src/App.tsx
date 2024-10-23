import "./App.module.css";

import { Header } from "./components/Header/Header";
import { TodoCreator } from "./components/TodoCreator/TodoCreator";
import { Wrapper } from "./components/Wrapper/Wrapper";
function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <TodoCreator />
      </Wrapper>
    </>
  );
}

export default App;
