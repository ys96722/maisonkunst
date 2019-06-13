import styled from "styled-components";
import { Flex } from "../../style/grid"

export const HomeContainer = styled(Flex)`
    width: 100vw;
    height: 100vh;
    background-color: black;
    perspective: 40px;

    img {
        display: block;
        position: absolute;
        top: 0%;
        left: 0%;
        /* width: 100px; */
        height: 100%;
        transition: all 1.0s;
        transform: translateY(-80%);

        &:hover {
            transform: translateY(-20%);
        }
    }
`

// export const Banner = styled(Flex)`
    
// `

export const Hero = styled(Flex)`
    width: 50%;
    height: 50%;
    /* background-color: white; */
    /* box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2); */
`