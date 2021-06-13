import React, { useEffect, useRef, useState } from "react";
import { characterType } from "../../data/type";

interface Props {
  characterData: Array<characterType>;
  //initializeDataFN: (characterData: Array<characterType>) => void;
  initialState: Array<characterType>;
}
export const TableData = ({
  characterData,
  //initializeDataFN,
  initialState,
}: Props) => {
  /* 
  useEffect(() => {
    initializeDataFN(characterData);
    // eslint-disable-next-line
  }, [characterData]); */

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
