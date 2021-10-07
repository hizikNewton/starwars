import { LayoutActions } from "../actions";

export const layoutReducer = (
  state: State.layoutState,
  action: { type: LayoutActions }
) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default: {
      /* 
      throw new Error(`Unhandled action type: ${action.type}`) */
      return state;
    }
  }
};
