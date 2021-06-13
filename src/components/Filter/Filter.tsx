import React from "react";
import * as S from "./styles";

interface Props {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  selectedFilter: filterState;
}
export type filterState = {
  selectedOption: "all" | "male" | "female" | "hermaphrodite";
};
export const Filter = ({ handleChange, selectedFilter }: Props) => {
  return (
    <S.Box>
      <label>
        <input
          type="radio"
          value="all"
          onChange={handleChange}
          checked={selectedFilter.selectedOption === "all"}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="male"
          onChange={handleChange}
          checked={selectedFilter.selectedOption === "male"}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          onChange={handleChange}
          checked={selectedFilter.selectedOption === "female"}
        />{" "}
        Female
      </label>
      <label>
        <input
          type="radio"
          value="hermaphrodite"
          onChange={handleChange}
          checked={selectedFilter.selectedOption === "hermaphrodite"}
        />
        Hermaphrodite
      </label>
    </S.Box>
  );
};
