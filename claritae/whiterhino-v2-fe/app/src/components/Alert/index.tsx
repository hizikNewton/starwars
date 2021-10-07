import { useEffect } from "react";
import { useAppState, useDispatch } from "../../contexts/providers";
import { AlertPanel } from "./styled";
import i18n, { currentLanguage } from "../../utils/i18n";
import { ComponentActions } from "../../contexts/actions";
import { parseSimpleDateNoSecond } from "../../utils/date";
import { AppCachedKeys } from "../../constants/cache";
import SimpleButton from "../SimpleButton";

const Alert = () => {
  const dispatch = useDispatch();
  const {
    app: { appErrors },
    components: { maintenanceAlertVisible },
  } = useAppState();
  const [startTime, endTime] = appErrors[2].message;

  const hideAlert = () => {
    sessionStorage.setItem(AppCachedKeys.MaintenanceAlert, "hide");
    dispatch({
      type: ComponentActions.UpdateMaintenanceAlertVisible,
      payload: {
        maintenanceAlertVisible: false,
      },
    });
  };

  useEffect(() => {
    const hideMaintenance =
      sessionStorage.getItem(AppCachedKeys.MaintenanceAlert) === "hide";
    if (startTime && endTime && !hideMaintenance) {
      dispatch({
        type: ComponentActions.UpdateMaintenanceAlertVisible,
        payload: {
          maintenanceAlertVisible: true,
        },
      });
    }
  }, [startTime, endTime, dispatch]);

  return maintenanceAlertVisible ? (
    <AlertPanel isEn={currentLanguage() === "en"}>
      <div>
        <span>
          {i18n.t("toast.maintenance", {
            start: parseSimpleDateNoSecond(startTime, "-", false),
            end: parseSimpleDateNoSecond(endTime, "-", false),
          })}
        </span>
        <div className="alert__dismiss__panel">
          <SimpleButton className="alert__dismiss" onClick={() => hideAlert()}>
            {i18n.t("toast.dismiss")}
          </SimpleButton>
        </div>
      </div>
    </AlertPanel>
  ) : null;
};

export default Alert;
