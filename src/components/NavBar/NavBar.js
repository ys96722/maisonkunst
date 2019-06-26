import React from "react"
import { NavContaner } from "./NavBar.style"

function NavBar(props) {
  return (
    <NavContaner src={props.src}>
      <img src={props.src} />
      <h1>hi</h1>
    </NavContaner>
  )
}

export default NavBar
