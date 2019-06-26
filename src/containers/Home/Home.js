import React from "react"
import { HomeContainer, Banner, Footer } from "./Home.style"
// import Stalker from "../../components/MyStalker/Stalker"
import Stalker from "../../components/Stalker/Stalker"
import NavBar from "../../components/NavBar/NavBar"

function Home(props) {
  return (
    <HomeContainer>
      {/* <Banner src="../../assets/imgLogo.jpeg" /> */}
      {/* <img alt="" src={require("../../assets/imgLogo.png")} /> */}
      <NavBar src={require("../../assets/imgLogo.png")} />
      <Stalker src={require("../../assets/printLogo.jpeg")} />
      <Footer>
        <h1>Copyright 2019 @ Ina Kang and Yoon Chang</h1>
      </Footer>
    </HomeContainer>
  )
}

export default Home
