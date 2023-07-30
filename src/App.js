import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Use "Switch" and "Route" from React Router
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './features/Home/Home';

const Men = () => <p>Men's collection</p>;
const Women = () => <p>Women's collection</p>;
const Kids = () => <p>Kids' collection</p>;

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Center Section */}
        <section className="center-section">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/men" component={Men} />
            <Route path="/women" component={Women} />
            <Route path="/kids" component={Kids} />
          </Switch>
        </section>

        {/* Rest of your application content */}
        {/* Add more sections as needed */}
      </div>
    </Router>
  );
};

export default App;
