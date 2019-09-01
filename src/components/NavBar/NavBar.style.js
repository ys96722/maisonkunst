import styled from "styled-components"
import { Link } from "react-router-dom"
import { Flex } from "../../style/grid"

export const NavContaner = styled(Flex)`
  display: flex;
  width: 100%;
  max-width: 1440px;
  position: fixed;
  top: 0;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`

export const NavLeftBox = styled(Flex)``
export const NavRightBox = styled(Flex)``
export const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
`

export const NavItemsContainer = styled.div``
