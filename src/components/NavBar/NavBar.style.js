import styled from "styled-components"
import { Flex } from "../../style/grid"

export const NavContaner = styled(Flex)`
  display: flex;
  width: 10%;
  img {
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    transition: all 1s;
    transform: translateY(-80%);

    &:hover {
      transform: translateY(-20%);
    }
  }
`
