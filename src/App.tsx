import React from "react";
import { Router, Route, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/:u">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
