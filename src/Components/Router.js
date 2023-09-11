/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import Header from "../Components/Header";
import Home from "../Routes/Home";
import Admin from "../Routes/Admin";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Profile from "../Routes/Profile";

export default () => (
  <Router>
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/theme/:id" exact element={<Detail />} />
        <Route path="/profile/:id" exact element={<Profile />} />
      </Routes>
    </>
  </Router>
);