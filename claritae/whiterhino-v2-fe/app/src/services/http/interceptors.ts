import { AxiosError } from "axios";
import { AppActions } from "../../contexts/actions";
import { AppDispatch } from "../../contexts/reducers";
import i18n from "../../utils/i18n";
import { axiosIns } from "./fetcher";

const updateNetworkError = (dispatch: AppDispatch, occurError: boolean) => {
  dispatch({
    type: AppActions.UpdateAppErrors,
    payload: {
      appError: {
        type: "Network",
        message: occurError ? [i18n.t("toast.invalid_network")] : [],
      },
    },
  });
};
export const initAxiosInterceptors = (dispatch: AppDispatch) => {
  axiosIns.interceptors.request.use(
    (request) => {
      if (request.method === "GET") {
        request.data = {
          unused: 0,
        };
      }
      return request;
    },
    (error) => Promise.reject(error)
  );

  axiosIns.interceptors.response.use(
    (response) => {
      updateNetworkError(dispatch, false);
      return response;
    },
    (error: AxiosError) => {
      updateNetworkError(dispatch, true);
      if (error && error.response && error.response.data) {
        switch (error.response.status) {
          case 422:
          case 404:
          case 400:
            updateNetworkError(dispatch, false);
            break;
          default:
            updateNetworkError(dispatch, true);
            break;
        }
      }
      return Promise.reject(error);
    }
  );
};

export default initAxiosInterceptors;
