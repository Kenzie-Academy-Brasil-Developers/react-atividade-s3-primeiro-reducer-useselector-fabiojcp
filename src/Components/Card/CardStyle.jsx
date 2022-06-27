// DivMain, DivText, Title, Value, Img
import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    margin: 0 8vw 2vh 8vw;
    padding: 1vw 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    border: 4px solid white;
    border-radius: 10px;
  }
  @media ${devices.tabletS} {
    width: 40vw;
    margin: 0 30vw 2vh 30vw;
  }
`;

export const DivText = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
  }
`;

export const Value = styled.p`
  @media ${devices.mobileSS} {
  }
`;

export const Img = styled.p`
  @media ${devices.mobileSS} {
    color: ${(props) => props.color};
    font-size: 10vw;
    text-align: center;
    text-align-last: center;
  }
`;
