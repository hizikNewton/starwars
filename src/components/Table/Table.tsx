import React, { useState, useReducer } from "react";
import { characterType } from "../../data/type";
import { Spinner } from "../Spinner";
import * as S from "./styles";
import { TableData } from "./TableData";

interface Props {
  characterData: Array<characterType>;
  loading: boolean;
}
type key = keyof characterType;
type Action = {
  type: string;
  payload: key;
};
type State = Array<characterType>;

const Table: React.FC<Props> = ({ characterData, loading }: Props) => {
  const [toggle, setToggle] = useState<boolean>();

  const filterBy = (key: key) => {
    const compare = (a: characterType, b: characterType) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    };
    return compare;
  };

  const [initialState, setDataToSort] =
    useState<Array<characterType>>(characterData);
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "asc":
        let comp = filterBy(action.payload);
        initialState.sort(comp);
        return state;
      case "dsc":
        filterBy(action.payload);
        return state;
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
