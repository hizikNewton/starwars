import { styled } from "../../globalStyles";

export const Box = styled.form`
  input[type="radio"] {
    border: 1px solid #fff;
    padding: 0.5em;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
    z-index: 4;
    border-radius: 5px;
    top: -20px;
    left: 0;
    position: relative;
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;
