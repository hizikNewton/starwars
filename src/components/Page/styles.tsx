import { styled } from "../../globalStyles";

export const PagePanel = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${(props) => props.theme.colors.dark};
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
`;
