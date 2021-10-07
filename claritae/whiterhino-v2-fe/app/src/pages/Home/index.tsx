import React from "react";
import Content from "../../components/Content";
import { HomeHeaderPanel, HomeHeaderTopPanel } from "./styled";
import HomeHeaderBackground from "../../assets/home_background.svg";
import i18n from "../../utils/i18n";

interface Props {}

const Home = (props: Props) => {
  return (
    <Content>
      <HomeHeaderPanel className="container">
        <HomeHeaderTopPanel
          style={{
            backgroundImage: `url(${HomeHeaderBackground})`,
          }}
        >
          <div className="home__top__title">
            {i18n.t("common.ckb_explorer")}
          </div>
          <div className="home__top__search" id="home__search__bar">
            {!headerSearchBarVisible && <Search hasButton />}
          </div>
        </HomeHeaderTopPanel>
      </HomeHeaderPanel>
    </Content>
  );
};

export default Home;
