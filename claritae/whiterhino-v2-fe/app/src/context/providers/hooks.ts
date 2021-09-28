import { useState } from "react";
import { useDispatch } from ".";
import { initAxiosInterceptors } from "../../service/http/interceptors";

export const useInitApp = () => {
  const [init, setInit] = useState(false);

  const dispatch = useDispatch();
  if (!init) {
    setInit(true);
    initAxiosInterceptors(dispatch);
  }
};
