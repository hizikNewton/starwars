import React, { useState, useReducer } from "react";
import { characterType } from "../../data/type";
import { Spinner } from "../Spinner";
import * as S from "./styles";
import { TableData } from "./TableData";
import { Action, key, State } from "./types";

interface Props {
  characterData: Array<characterType>;
  loading: boolean;
}

const Table: React.FC<Props> = ({ characterData, loading }: Props) => {
  const [toggle, setToggle] = useState<boolean>();

  const ascFilter = (key: key) => {
    return function (a: characterType, b: characterType) {
      if (key === "height") {
        let numa = parseInt(a[key]);
        let numb = parseInt(b[key]);
        const result = numa < numb ? -1 : numa > numb ? 1 : 0;
        return result;
      }
      const result = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
      return result;
    };
  };
  const dscFilter = (key: key) => {
    return function (a: characterType, b: characterType) {
      if (key === "height") {
        let numa = parseInt(a[key]);
        let numb = parseInt(b[key]);
        const result = numa < numb ? 1 : numa > numb ? -1 : 0;
        return result;
      }
      const result = a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      return result;
    };
  };
  const [initialState, setDataToSort] =
    useState<Array<characterType>>(characterData);

  const reducer = (state: State, action: Action): State => {
    let comp;
    switch (action.type) {
      case "asc":
        comp = ascFilter(action.payload);
        initialState.sort(comp);
        return initialState;
      case "dsc":
        comp = dscFilter(action.payload);
        initialState.sort(comp);
        return initialState;
      default:
        return state;
    }
  };

  const init = (initialState: Array<characterType>) => {
    setDataToSort(initialState);
    return initialState;
  };
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const toggleHandler = (e: React.MouseEvent<HTMLTableHeaderCellElement>) => {
    const key = e.currentTarget.headers as key;
    setToggle((toggle) => !toggle);
    let toggleVal = toggle ? "asc" : "dsc";
    dispatch({ type: toggleVal, payload: key });
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <th onClick={toggleHandler} headers="name">
            {"Name"}
          </th>
          <th onClick={toggleHandler} headers="height">
            {"Height"}
          </th>
          <th onClick={toggleHandler} headers="gender">
            {"Gender"}
          </th>
        </tr>
      </thead>

      <tbody>
        <>
          {!loading && characterData.length !== 0 ? (
            <TableData
              characterData={characterData}
              sortedData={state}
              setDataToSort={init}
            />
          ) : loading ? (
            <tr>
              <Spinner />
            </tr>
          ) : (
            <></>
          )}
        </>
      </tbody>
    </S.Table>
  );
};

export default Table;
