import { characterType } from "../../data/type";

export type key = keyof characterType;
export type Action = {
  type: string;
  payload: key;
};
export type State = Array<characterType>;
