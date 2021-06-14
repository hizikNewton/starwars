import React, { useState, useReducer, useEffect } from "react";
import { characterType } from "../../data/type";
import { Spinner } from "../Spinner";
import * as S from "./styles";
import { TableData } from "./TableData";
import { key } from "./types";
import { Filter } from "../Filter";
import { FilterSVG, ArrowUpward, ArrowDownward } from "../../assets/img";
import { nreducer } from "../../helper";

interface Props {
  characterData: Array<characterType>;
  loading: boolean;
  title: string;
}

const Table: React.FC<Props> = ({ characterData, loading, title }: Props) => {
  const [toggle, setToggle] = useState<{
    header: boolean;
    filter: boolean;
    keyName: string;
  }>({
    header: false,
    filter: false,
    keyName: "",
  });

  const [initialState, setData] = useState<Array<characterType>>(characterData);
  useEffect(() => {
    setData(characterData);
    dispatch({
      type: "INITIALIZE",
      payload: characterData,
    });
  }, [characterData]);

  const reducer = nreducer(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleHandler = (e: React.MouseEvent<HTMLTableHeaderCellElement>) => {
    const key = e.currentTarget.headers as key;

    setToggle((toggle) => ({
      ...toggle,
      header: !toggle.header,
      keyName: key,
    }));
    let toggleVal = toggle.header ? "DSC_SORT" : "ASC_SORT";
    dispatch({ type: toggleVal, payload: key });
  };

  const { keyName, header } = toggle;
  return (
    <S.MovieCharacterTable>
      <S.TableHeader>
        <h3>{title}</h3>
        <S.FilterIcon>
          <div
            onClick={() =>
              setToggle((toggle) => ({
                ...toggle,
                filter: !toggle.filter,
              })) as any
            }
          >
            <FilterSVG />
            {"Filter"}
          </div>
          {toggle.filter && <Filter dispatch={dispatch} />}
        </S.FilterIcon>
      </S.TableHeader>
      <S.TableWrapper>
        <S.Table>
          <thead>
            <tr>
              <th onClick={toggleHandler} headers="name">
                {"Name"}
                {keyName === "name" &&
                  (header ? <ArrowDownward /> : <ArrowUpward />)}
              </th>
              <th onClick={toggleHandler} headers="height">
                {"Height"}
                {keyName === "height" &&
                  (header ? <ArrowDownward /> : <ArrowUpward />)}
              </th>
              <th onClick={toggleHandler} headers="gender">
                {"Gender"}
                {keyName === "gender" &&
                  (header ? <ArrowDownward /> : <ArrowUpward />)}
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
      </S.TableWrapper>
    </S.MovieCharacterTable>
  );
};

export default Table;
