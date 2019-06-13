import React from 'react';
import Home from "../Home/Home"
import { GlobalStyle } from "../../style/GlobalStyle"
import { Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Route to="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
