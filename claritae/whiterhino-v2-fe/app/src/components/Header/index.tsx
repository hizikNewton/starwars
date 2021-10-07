import {
  HeaderEmptyPanel,
  HeaderLogoPanel,
  HeaderMobileMenuPanel,
  HeaderPanel,
} from "./styled";
import LogoIcon from "../../assets/logo.png";
import { useAppState, useDispatch } from "../../contexts/providers";
import { ComponentActions } from "../../contexts/actions";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { currentLanguage } from "../../utils/i18n";
import { isMobile, isScreen750to1440 } from "../../utils/screen";
import MenusComp from "./MenusComp";
import { SearchComp } from "./SearchComp";

const LogoComp = () => (
  <HeaderLogoPanel to="/">
    <img src={LogoIcon} alt="logo" />
  </HeaderLogoPanel>
);

const MobileMenuComp = () => {
  const dispatch = useDispatch();
  const {
    components: { mobileMenuVisible },
  } = useAppState();
  return (
    <HeaderMobileMenuPanel
      onClick={() => {
        dispatch({
          type: ComponentActions.UpdateHeaderMobileMenuVisible,
          payload: {
            mobileMenuVisible: !mobileMenuVisible,
          },
        });
      }}
    >
      <div className={mobileMenuVisible ? "close" : ""}>
        <div className="menu__icon__first" />
        <div className="menu__icon__second" />
        <div className="menu__icon__third" />
      </div>
    </HeaderMobileMenuPanel>
  );
};

export default () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const {
    components: {
      searchBarEditable,
      headerSearchBarVisible,
      maintenanceAlertVisible,
    },
  } = useAppState();

  useEffect(() => {
    dispatch({
      type: ComponentActions.UpdateHeaderSearchBarVisible,
      payload: {
        headerSearchBarVisible: pathname !== "/" && pathname !== "/search/fail",
      },
    });
  }, [dispatch, pathname]);

  return (
    <HeaderPanel
      isNotTop={maintenanceAlertVisible}
      isEn={currentLanguage() === "en"}
    >
      <LogoComp />
      {!isMobile() && (
        <>
          {!(
            isScreen750to1440() &&
            searchBarEditable &&
            headerSearchBarVisible
          ) && <MenusComp />}
          <HeaderEmptyPanel />
          {headerSearchBarVisible && <SearchComp />}
        </>
      )}
      {isMobile() && (
        <>
          <HeaderEmptyPanel />
          <MobileMenuComp />
        </>
      )}
    </HeaderPanel>
  );
};
