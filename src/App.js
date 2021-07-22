import './App.css';
import {useSelector} from "react-redux";

function App() {
  const {todos} = useSelector(state => state);
  return (
      <div className="App">
        <h1>My todo:</h1>
      </div>
  );
}

export default App;
