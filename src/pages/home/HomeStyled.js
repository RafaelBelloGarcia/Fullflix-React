import styled from "styled-components";
import background from "../../components/assets/images/background.png";

export const MainContainer = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 2vw;
  height: fit-content;
  min-height: 100vh;
  background-color: black;
  .containerbutton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }
`;

export const Part1 = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  height: 100vh;
`;

export const Part2 = styled.div`
  background-color: black;
  height: 10vh;
  color: #fff;
  font-size: 4vh;
  padding-left: 2vw;
`;

export const Part3 = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: fit-content;
  min-height: 90vh;
`;

export const ButtonPrincipal = styled.button`
  font-size: 20px;
  background-color: black;
  border-radius: 5px;
  width: 150px;
  height: min-content;
  border-color: white;
  color: white;
  :hover {
    color: white;
    border-color: white;
    background-color: red;
  }
`;
