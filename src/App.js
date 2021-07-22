import './App.css';
import {useSelector} from "react-redux";
import Todos from "./components/todos/Todos";

function App() {
  const {todos} = useSelector(state => state);
  return (
      <div className="App">
        <h1>My todos:</h1>
          <Todos/>
      </div>
  );
}

export default App;
