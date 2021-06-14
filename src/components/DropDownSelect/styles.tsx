import { styled } from "../../globalStyles";

export const DropDown = styled.div`
  margin: auto;
  display: flex;
  width: max-content;
  background-color: ${(props) => props.theme.colors.yellow};
  cursor: pointer;

  p {
    margin: auto;
    margin-left: 10px;
  }
`;

export const DropdownContainer = styled.div`
  margin-right: 0;
  position: relative;
`;

export const OptionListItem = styled.div.attrs({
  className: "options",
})`
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  background-color: ${(props) => props.theme.colors.mediumYellow};
  box-shadow: 0px 5px 8px #5554027f;
  border-radius: 5px;
  top: 20px;
  left: 0;
  text-align-last: left;

  p {
    padding: 10px 0;
    width: 100%;
    /* border-bottom: 1px solid var(--border-color); */
    margin: auto;
  }
`;

export const SvgContainer = styled.div`
  margin: auto;
`;
