import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import SideBar from "./components/Sidebar";

import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <SideBar />

        <main className="main">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome" />
            </Route>

            <Route path="/home">Home</Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
