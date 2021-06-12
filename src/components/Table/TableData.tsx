import React, { useEffect } from "react";
import { characterType } from "../../data/type";

interface Props {
  characterData: Array<characterType>;
  setDataToSort: (characterData: Array<characterType>) => void;
  sortedData: Array<characterType>;
}
export const TableData = ({ characterData, setDataToSort }: Props) => {
  useEffect(() => {
    setDataToSort(characterData);
    // eslint-disable-next-line
  }, [characterData]);
  return (
    <>
      {characterData?.map(({ name, height, gender }, idx) => (
        <tr key={`${name}${height}${idx}`}>
          <td>{name}</td>
          <td>{height}</td>
          <td>{gender}</td>
        </tr>
      ))}
    </>
  );
};
