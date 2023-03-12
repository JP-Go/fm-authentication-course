import type { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={LoginForm} />
      <Route path="/app" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </Routes>
  );
};

export default App;
