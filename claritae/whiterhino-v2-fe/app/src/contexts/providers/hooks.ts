import { useEffect, useRef, useState } from "react";
import { useDispatch } from ".";
import { initAxiosInterceptors } from "../../services/http/interceptors";
import { createBrowserHistory } from "history";

export const useInitApp = () => {
  const [init, setInit] = useState(false);

  const dispatch = useDispatch();
  if (!init) {
    setInit(true);
    initAxiosInterceptors(dispatch);
  }
};

export const useRouterLocation = (callback: () => void) => {
  const history = createBrowserHistory();
  const savedCallback = useRef(() => {});
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    const currentCallback = () => {
      savedCallback.current();
    };
    const listen = history.listen(() => {
      currentCallback();
    });
    return () => {
      listen();
    };
  }, [history]);
};
