import styled from "styled-components"
import { Flex } from "../../style/grid"

export const HomeContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  background-color: black;
`

export const BannerImage = styled.img`
  min-width: 400px;
  width: 25%;
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
