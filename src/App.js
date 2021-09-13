import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import About from "./components/About";
import MyBlog from "./components/Myblog";
import Errorpage from "./components/Errorpage";

const App = () => {
  return(
    <>
      <Navbar/>
      <Switch>
      <Route exact path="/ReactBlog"><Home/><Posts/></Route>
      <Route exact path="/about"><About/></Route>
      <Route exact path="/myblog"><MyBlog/></Route>
      <Route><Errorpage /></Route>
      </Switch>
      <Contact/>
    </>
  );
}

export default App;
