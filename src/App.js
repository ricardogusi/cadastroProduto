import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Home from "./Components/Home/Home";
import GetProdutos from "./Components/GetProdutos/GetProdutos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact={true} component={Home} />
        

        <Route path="/produtos" component={GetProdutos} />

        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
