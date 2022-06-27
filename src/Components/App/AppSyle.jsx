import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";


export const Header = styled.div`
  @media ${devices.mobileSS} {
    background-image: url(${props => props.Bck});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 25vh;
    width: 92vw;
    margin: 2vh 4vw;
    color: red;
    text-align: center;
    border-radius: 10%;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    padding: 1vh 0 2vh 0;
    text-shadow: 0 0 2px white;
    background-color: transparent;
  }
`;

export const DivProducts = styled.div`
  @media ${devices.mobileSS} {

  }
`;
