import styled from "styled-components";

const Application = styled.div`
  border-radius: 4px;
  font-family: Roboto;
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  color: white;
  height: 50%;
  overflow: hidden;
  width: 50%;
  @media screen and (max-width: 1201px) {
    border-radius: 0px;
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

const DisplayConsole = styled.div`
  height: 66%;
  width: 100%;
  background: white;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export { Application, DisplayConsole, Wrapper };
