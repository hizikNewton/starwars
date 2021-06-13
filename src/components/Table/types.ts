import { characterType } from "../../data/type";
import { filterState } from "../Filter";

export type key = keyof characterType;
export type Action = {
  type: string;
  payload: key;
};

export type Payload = key | filterState[keyof filterState];
export type State = Array<characterType>;
