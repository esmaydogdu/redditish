import React from "react";
import { Navigation } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, NotFound, Submit } from "./pages";
import { PostsProvider } from "./contexts/PostsContext";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div className="App pb-4 px-4">
      <BrowserRouter>
        <Navigation />
        <PostsProvider>
          <ToastProvider
            autoDismiss
            autoDismissTimeout={3000}
            placement="top-center"
          >
            <Switch>
              <Route path="/submit">
                <Submit />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </ToastProvider>
        </PostsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
