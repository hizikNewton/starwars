import { BrowserRouter as Router } from "react-router-dom";
import { ComponentActions } from "../contexts/actions";
import { useAppState, useDispatch } from "../contexts/providers";
import { useRouterLocation } from "../contexts/providers/hooks";

const Routers = () => {
  const dispatch = useDispatch();
  const { components } = useAppState();
  const { mobileMenuVisible } = components;
  useRouterLocation(() => {
    if (mobileMenuVisible) {
      dispatch({
        type: ComponentActions.UpdateHeaderMobileMenuVisible,
        payload: {
          mobileMenuVisible: false,
        },
      });
    }
  });
  return <Router></Router>;
};

export default Routers;
