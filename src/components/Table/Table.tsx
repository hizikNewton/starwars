import React, { useState, useReducer, useEffect } from "react";
import { characterType } from "../../data/type";
import { Spinner } from "../Spinner";
import * as S from "./styles";
import { TableData } from "./TableData";
import { Action, key, Payload, State } from "./types";
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

  useEffect(() => {
    setData(characterData);
    dispatch({
      type: "INITIALIZE",
      payload: characterData,
    });
  }, [characterData]);

  const nreducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "INITIALIZE": {
        const state = action.payload! as State;
        return state;
      }
      case "GENDER_FILTER": {
        const newState = genderFilter(action.payload as any, state);
        return newState;
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(nreducer, initialState);
  console.log(state);
  /* 
  const reducer = (state: State, action: Action): State => {
    let comp;
    switch (action.type) {
      case "asc":
        comp = ascFilter(action.payload!);
        initialState.sort(comp);
        return initialState;
      case "dsc":
        comp = dscFilter(action.payload!);
        initialState.sort(comp);
        return initialState;
      case "genderFilter":
        const newState = genderFilter(action.payload as any, state);
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
  const [state, dispatch] = useReducer(reducer, initialState, init); */

  const toggleHandler = (e: React.MouseEvent<HTMLTableHeaderCellElement>) => {
    const key = e.currentTarget.headers as key;
    setToggle((toggle) => ({ ...toggle, header: !toggle.header }));
    let toggleVal = toggle.header ? "asc" : "dsc";
    dispatch({ type: toggleVal, payload: key });
  };

  const [selectedFilter, setSelectedFilter] = useState<filterState>({
    selectedOption: "all",
  });

  return (
    <S.Table>
      <thead>
        <tr>
          <th>
            <span>
              <FilterSVG />
              {"Filter"}
            </span>
            {toggle.filter && <Filter dispatch={dispatch} />}
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
            <TableData characterData={characterData} initialState={state} />
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
