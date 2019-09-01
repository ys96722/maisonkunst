import React from "react"
import {
  NavContaner,
  NavItemsContainer,
  NavLeftBox,
  NavRightBox,
  NavItem
} from "./NavBar.style"

function NavBar(props) {
  return (
    <NavContaner>
      {/* <NavItemsContainer> */}
      <NavLeftBox>
        <p>MASION KUNST</p>
      </NavLeftBox>
      <NavRightBox>
        <NavItem>SHOP</NavItem>
        <NavItem>ACCOUNT</NavItem>
        <NavItem>CART</NavItem>
        <NavItem>KR</NavItem>
      </NavRightBox>
      {/* </NavItemsContainer> */}
    </NavContaner>
  )
}

export default NavBar
