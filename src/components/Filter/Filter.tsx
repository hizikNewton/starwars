import React, { useEffect, useState } from "react";
import { Action } from "../Table/types";
import * as S from "./styles";

interface Props {
  dispatch: (value: Action) => void;
}
export type filterState = {
  selectedOption: "all" | "male" | "female" | "hermaphrodite" | string;
};

export const Filter = ({ dispatch }: Props) => {
  const [selectedFilter, setSelectedFilter] = useState<filterState>({
    selectedOption: "all",
  });

  useEffect(() => {
    dispatch({
      type: "GENDER_FILTER",
      payload: selectedFilter.selectedOption,
    });
  }, [selectedFilter.selectedOption]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSelectedFilter((option) => ({ ...option, selectedOption: value }));
  };

  return (
    <S.Box>
      <fieldset>
        <label>
          <input
            type="radio"
            value="all"
            checked={selectedFilter.selectedOption === "all"}
            onChange={handleChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="male"
            checked={selectedFilter.selectedOption === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={selectedFilter.selectedOption === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            value="hermaphrodite"
            checked={selectedFilter.selectedOption === "hermaphrodite"}
            onChange={handleChange}
          />
          Hermaphrodite
        </label>
      </fieldset>
    </S.Box>
  );
};
