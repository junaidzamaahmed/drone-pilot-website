import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home/Home";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Home/Products/Products";
import ProductDetails from "./components/Home/Products/ProductDetails/ProductDetails";
import PurchaseSuccessful from "./components/Home/Products/PurchaseSuccessful/PurchaseSuccessful";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/products/:id">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <PrivateRoute path="/purchasesuccessful">
              <PurchaseSuccessful></PurchaseSuccessful>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
