import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ChatApp from "./components/ChatApp";

const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          exact
          path="/"
          element={!localStorage.getItem("username") ? <Login /> : <ChatApp />}
        />
      </Routes>
    </div>
  );
};
export default RoutesApp;
