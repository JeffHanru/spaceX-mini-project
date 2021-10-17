import styled from "styled-components";

const DisplayConsoleWrapper = styled.div`
  background: black;
  box-sizing: border-box;
  color: green;
  font-size: 16px;
  height: 66%;
  width: 100%;
  padding: 40px;
  overflow: auto;
  @media screen and (max-width: 1201px) {
    height: 100%;
    width: 66%;
  }
`;

const ConsoleItem = styled.pre`
  margin: 20px 0;
  overflow-wrap: break-word;
  width: 100%;
  white-space: pre-wrap;
`;

const ConsoleTitle = styled.div`
  font-size: 24px;
`;

export { DisplayConsoleWrapper, ConsoleItem, ConsoleTitle };
