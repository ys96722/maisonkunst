import styled, { css } from "styled-components"
import { Flex } from "../../style/grid"

export const StalkerContainer = styled(Flex)`
  width: 50%;
  height: 50%;
  color: white;
  /* background-color: white; */
  perspective: 1000;
  transition: all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99);
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${({ rotate }) =>
    rotate &&
    css`
      transform: ${rotate};
    `};
`

export const Helper = styled.span`
  color: black;
  padding: 0.2em;
  border-radius: 5%;
  background-color: grey;

  position: absolute;
  z-index: 0;
  display: relative;
`
