import { filterState } from "../components/Filter";
import { key } from "../components/Table/types";
import { characterType } from "../data/type";

export const ascFilter = (key: key) => {
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

export const dscFilter = (key: key) => {
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

export const genderFilter = (
  gender: filterState[keyof filterState],
  data: Array<characterType>
) => {
  if (gender === "all") {
    return data;
  }
  let result = data.filter((i) => i.gender === gender);
  console.log("G:", gender, "D:", data, "R", result);
  return result;
};
