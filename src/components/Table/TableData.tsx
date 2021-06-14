import React from "react";
import { characterType } from "../../data/type";

interface Props {
  initialState: Array<characterType>;
}
export const TableData = ({ initialState }: Props) => {
  const ComputeHeight = () => {
    let height = initialState
      .map((i) => (parseInt(i.height) ? parseInt(i.height) : 0))
      .reduce((a, b) => a + b, 0);

    return (
      <>
        <td key={"height"}>{`${height} cm (${Math.trunc(
          height * 0.0328084
        )}ft/${(height * 0.393701).toFixed(2)}in)`}</td>
      </>
    );
  };
  return (
    <>
      {initialState?.map(({ name, height, gender }, idx) => (
        <tr key={`${name}${height}${idx}`}>
          <td>{name}</td>
          <td>{height}</td>
          <td>{gender}</td>
        </tr>
      ))}
      <tr key={"height"}>{ComputeHeight()}</tr>
    </>
  );
};
