import styled from "styled-components"

export const StalkerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: transparent; */
  /* color: white; */
  /* font-size: 50px; */
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 50%;
  /* &::before {
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        left: inherit;
        top: inherit;
        background-size: cover;
        background-repeat: no-repeat;
    } */
`
