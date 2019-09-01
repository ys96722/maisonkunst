import React from "react"
import Home from "../Home/Home"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { GlobalStyle } from "../../style/GlobalStyle"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { AppContainer, PageContainer } from "./App.style"

function App() {
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <GlobalStyle />
        <PageContainer>
          <Switch>
            <Route to="/" component={Home} />
            <Route to="/" component={Home} />
            <Route to="/" component={Home} />
          </Switch>
        </PageContainer>
      </Router>
      <Footer />
    </AppContainer>
  )
}

export default App
