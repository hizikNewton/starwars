import { createContext, useContext, useReducer } from "react";
import { AppDispatch, reducer } from "../reducers";
import initState from "../states";

export const AppContext = createContext<{
  state: typeof initState;
  dispatch: AppDispatch;
}>({
  state: initState,
  dispatch: () => {},
});

const withProviders =
  (Comp: React.ComponentType) => (props: React.Props<any>) => {
    const [providers, dispatch] = useReducer(reducer, initState);

    return (
      <AppContext.Provider
        value={{
          state: providers,
          dispatch,
        }}
      >
        <Comp {...props} />
      </AppContext.Provider>
    );
  };

export const useAppState = () => useContext(AppContext).state;
export const useDispatch = () => useContext(AppContext).dispatch;

export default withProviders;
