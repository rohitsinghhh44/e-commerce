import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";

const Hatspage = () => (
  <div>
    <h1>hat page</h1>
  </div>
);
const Jacketspage = () => (
  <div>
    <h1>jacket page</h1>
  </div>
);
const Sneakerspage = () => (
  <div>
    <h1>sneakers page</h1>
  </div>
);
const Womenspage = () => (
  <div>
    <h1>womens page</h1>
  </div>
);
const Menspage = () => (
  <div>
    <h1>mens page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hatspage} />
        <Route exact path="/jackets" component={Jacketspage} />
        <Route exact path="/sneakers" component={Sneakerspage} />
        <Route exact path="/womens" component={Womenspage} />
        <Route exact path="/mens" component={Menspage} />
        <Route exact path="/shop" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
