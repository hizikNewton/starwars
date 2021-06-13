import { characterType } from "../../data/type";
import { filterState } from "../Filter";

export type key = keyof characterType;
export type Action = {
  type: string;
  payload?: Payload;
};

export type Payload =
  | key
  | filterState[keyof filterState]
  | Array<characterType>;
export type State = Array<characterType>;

export interface Props {
  characterData: Array<characterType>;
  loading: boolean;
}
