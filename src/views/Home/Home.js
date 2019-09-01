import React from "react"
import { HomeContainer, BannerImage } from "./Home.style"

function Home(props) {
  return (
    <HomeContainer>
      <BannerImage
        src={require("../../assets/home/prima_hero.png")}
        alt="banner"
      />
    </HomeContainer>
  )
}

export default Home
