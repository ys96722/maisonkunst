import styled from "styled-components"
import { Flex } from "../../style/grid"

export const HomeContainer = styled(Flex)`
  width: 100vw;
  height: 100vh;
  background-color: black;
  perspective: 40px;
`

// export const Banner = styled(Flex)`

// `

export const Hero = styled(Flex)`
  width: 50%;
  height: 50%;
  /* background-color: white; */
  /* box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2); */
`

export const Footer = styled(Flex)`
  position: absolute;
  width: 80%;
  height: 10%;
  justify-content: center;
  align-self: flex-end;
  /* color: white; */

  h1 {
    color: gray;
    font-size: 10px;
  }
`
