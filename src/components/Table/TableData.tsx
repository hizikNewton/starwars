import React from "react";
import { characterType } from "../../data/type";

interface Props {
  initialState: Array<characterType>;
}
export const TableData = ({ initialState }: Props) => {
  return (
    <>
      {initialState?.map(({ name, height, gender }, idx) => (
        <tr key={`${name}${height}${idx}`}>
          <td>{name}</td>
          <td>{height}</td>
          <td>{gender}</td>
        </tr>
      ))}
    </>
  );
};
