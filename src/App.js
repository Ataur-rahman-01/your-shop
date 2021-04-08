import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const userContext = createContext();
export const productContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [product, setProduct] = useState();
  console.log(user);
  return (
    <productContext.Provider value={[product, setProduct]}>
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Header />

          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <PrivateRoute path="/product/:id">
              <Checkout />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/order">
              <Order />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </productContext.Provider>
  );
}

export default App;
