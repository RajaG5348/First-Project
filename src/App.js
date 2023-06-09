import { BrowserRouter } from "react-router-dom";
import './App.css'
import RoutesComponent from "./Components/RoutesComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
