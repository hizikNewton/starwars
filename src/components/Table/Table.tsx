import React from "react";
import { characterType } from "../../data/type";
import * as S from "./styles";

interface Props {
  characterData: Array<characterType>;
}

const Table = (props: Props) => {
  console.log(props.characterData);
  return (
    <div>
      <S.Table>
        <thead>
          <tr>
            <th>{"Name"}</th>
            <th>{"Height"}</th>
            <th>{"Gender"}</th>
          </tr>
        </thead>

        <tbody>
          {props.characterData.map(({ name, height, gender }) => (
            <tr>
              <td>{name}</td>
              <td>{height}</td>
              <td>{gender}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </div>
  );
};

export default Table;
