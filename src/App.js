import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Use "Switch" and "Route" from React Router
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./features/Home/Home";
import Men from "./features/Men/Men";
import Women from "./features/Women/Women";
import Jewelery from "./features/Jewelery/Jewelery";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./features/Cart/Cart";



const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <section className="nav-section">
          <Navbar />
        </section>

        {/* Center Section */}
        <section className="center-section">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category/men" component={Men} />
            <Route path="/category/women" component={Women} />
            <Route path="/category/jewelery" component={Jewelery} />
            <Route path="/cart" component={Cart}/>
            <Route
              path="/category/:categoryName/:productId"
              component={ProductPage}
            />
          </Switch>
        </section>
        <Cart/>
        {/* Rest of your application content */}
        {/* Add more sections as needed */}
        <section className="footer">
          <Footer />
        </section>
      </div>
    </Router>
  );
};

export default App;
