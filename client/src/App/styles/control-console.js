import styled from "styled-components";

const ControlConsoleWrapper = styled.div`
  background: #e5e5e5;
  box-sizing: border-box;
  color: black;
  display: flex;
  height: 34%;
  width: 100%;
  @media screen and (max-width: 1201px) {
    flex-direction: column;
    height: 100%;
    width: 34%;
  }
`;

const ConsoleSectionWrapper = styled.div`
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 5px;
  padding: 5px;
`;

export { ControlConsoleWrapper, ConsoleSectionWrapper };
