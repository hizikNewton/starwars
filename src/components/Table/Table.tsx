import React, { useState, useReducer, useEffect } from "react";
import { characterType } from "../../data/type";
import { Spinner } from "../Spinner";
import * as S from "./styles";
import { TableData } from "./TableData";
import { Action, key, State } from "./types";
import { Filter, filterState } from "../Filter";
import FilterSVG from "../../assets/img/Filter";
import { ascFilter, dscFilter, genderFilter } from "../../helper";

interface Props {
  characterData: Array<characterType>;
  loading: boolean;
}

const Table: React.FC<Props> = ({ characterData, loading }: Props) => {
  const [toggle, setToggle] = useState<{ header: boolean; filter: boolean }>({
    header: false,
    filter: true,
  });

  const [initialState, setData] = useState<Array<characterType>>(characterData);

  const reducer = (state: State, action: Action): State => {
    state = init(initialState);
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
      case "genderFilter":
        const newState = genderFilter(action.payload as any, state);
        setData(newState);
        return newState;
      default:
        init(initialState);
        return state;
    }
  };

  const init = (initialState: Array<characterType>) => {
    setData(initialState);
    return initialState;
  };
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const toggleHandler = (e: React.MouseEvent<HTMLTableHeaderCellElement>) => {
    const key = e.currentTarget.headers as key;
    setToggle((toggle) => ({ ...toggle, header: !toggle.header }));
    let toggleVal = toggle.header ? "asc" : "dsc";
    dispatch({ type: toggleVal, payload: key });
  };

  const [selectedFilter, setSelectedFilter] = useState<filterState>({
    selectedOption: "all",
  });
  const filterHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget as any;
    setToggle((toggle) => ({ ...toggle, header: !toggle.filter }));
    setSelectedFilter((option) => ({ ...option, selectedOption: value }));
    dispatch({
      type: "genderFilter",
      payload: selectedFilter.selectedOption as any,
    });
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <th>
            <span>
              <FilterSVG />
              {"Filter"}
            </span>
            {toggle.filter && (
              <Filter
                handleChange={filterHandler}
                selectedFilter={selectedFilter}
              />
            )}
          </th>
        </tr>
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
              initialState={initialState}
              initializeDataFN={init}
            />
          ) : loading ? (
            <tr>
              <td>
                <Spinner />
              </td>
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
