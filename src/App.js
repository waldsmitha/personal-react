import React from "react";
//Components & Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import Theme from "./Theme";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/showcase:id", "/"]}>
        <Theme>
          <Home />
        </Theme>
      </Route>
    </div>
  );
}

export default App;
