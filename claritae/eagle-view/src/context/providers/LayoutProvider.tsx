import React, { FC, createContext, useContext } from "react";
import { LayoutActions } from "../actions";
import { layoutReducer } from "../reducers/LayoutReducer";

type LayoutDispatch = React.Dispatch<{ type: LayoutActions; payload: any }>; // TODO: add type of payload

const initLayoutState = {
  isSidebarOpened: true,
};

const LayoutContext = createContext<{
  state: State.layoutState;
  dispatch: LayoutDispatch;
}>({
  state: initLayoutState,
  dispatch: () => {},
});

export const LayoutProvider: FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(layoutReducer, initLayoutState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutState = () => useContext(LayoutContext).state;
export const useLayoutDispatch = () => useContext(LayoutContext).dispatch;
