import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24%;
  height: 34.375rem;
  background-color: black;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    max-width: 300px;
  }

  .infocontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.8rem;
  }
  :hover {
    cursor: pointer;
    border: 1px solid #e50914;
    transform: scale(1.08);
    transition: 0.5s;
  }
`;

export const Containerflex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  padding: 10vh 0;
  width: fit-content;
  gap: 30px;
  margin: 20px;
`;
