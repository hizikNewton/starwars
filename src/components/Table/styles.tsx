import styled from "styled-components";

export const TableHeader = styled.div`
  display: flex;
  background-color: yellowgreen;
  height: 70px;
  position: sticky;
  width: 50%;
  margin: auto;
  justify-content: space-between;
`;
export const TableWrapper = styled.div`
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
  height: calc(100% - 20vh);
  width: 50%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  white-space: nowrap;
  background-color: white;
  @media (max-width: 600px) {
    width: 100%;
    order: 2;
  }
  tr:nth-child(even) {
    background: #f8f8f8;
  }
  td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
  }
  th {
    text-align: center;
    padding: 4px;
    background: white;
    top: 0;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
`;
export const MovieCharacterTable = styled.div`
  display: block;
  width: 50%;
`;
export const FilterIcon = styled.div`
  display: block;
  div {
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
