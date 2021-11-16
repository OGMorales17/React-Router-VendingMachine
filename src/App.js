import { BrowserRouter, Route, Switch } from "react-router-dom";
import Soda from "./Components/Soda";
import Snikers from "./Components/Snikers";
import Fish from "./Components/Fish";
import './App.css';
import VendingMachine from './Components/VendingMachine';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path="/soda">
        <Soda />
      </Route>
      <Route exact path="/snikers">
        <Snikers />
      </Route>
      <Route exact path="/fish">
        <Fish />
      </Route>
    </BrowserRouter>
  );
}

export default App;


