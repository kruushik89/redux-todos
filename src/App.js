import './App.css';
import Todos from "./components/todos/Todos";
import MyForm from "./components/my-form/MyForm";

function App() {
    return (
      <div className="App">
        <h1>My todos:</h1>
          <MyForm/>
          <Todos/>
      </div>
  );
}

export default App;
