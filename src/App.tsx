import React from "react";
import { Navigation } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, NotFound, Submit } from "./pages";
import { PostsProvider } from "./contexts/PostsContext";


function App() {
  return (
    <div className="App pb-4 px-4">
      <BrowserRouter>
        <Navigation />
        <PostsProvider>
          <Switch>
            <Route path="/submit">
              <Submit />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </PostsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
