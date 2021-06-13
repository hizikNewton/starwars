import React, { useState, useReducer, useEffect } from "react";
import { characterType } from "../../data/type";
import { Spinner } from "../Spinner";
import * as S from "./styles";
import { TableData } from "./TableData";
import { Action, key, State } from "./types";
import { Filter } from "../Filter";
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
    let comp;
    switch (action.type) {
      case "INITIALIZE": {
        state = action.payload ? (action.payload! as State) : initialState;
        return state;
      }
      case "GENDER_FILTER": {
        const newState = genderFilter(action.payload as any, state);
        return newState;
      }
      case "ASC_SORT":
        comp = ascFilter(action.payload! as keyof characterType);
        state.sort(comp);
        return state;
      case "DSC_SORT":
        comp = dscFilter(action.payload! as keyof characterType);
        state.sort(comp);
        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(nreducer, initialState);
  console.log(state);

  const toggleHandler = (e: React.MouseEvent<HTMLTableHeaderCellElement>) => {
    const key = e.currentTarget.headers as key;
    setToggle((toggle) => ({ ...toggle, header: !toggle.header }));
    let toggleVal = toggle.header ? "DSC_SORT" : "ASC_SORT";
    dispatch({ type: toggleVal, payload: key });
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
            <TableData initialState={state} />
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
