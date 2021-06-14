import { Action, State } from "../components/Table/types";
import { characterType } from "../data/type";
import { ascFilter, dscFilter, genderFilter } from "./filterFunction";

export const nreducer =
  (initialState: Array<characterType>) =>
  (state: State, action: Action): State => {
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
