/* eslint-disable object-curly-newline */
import { Link } from "react-router-dom";
import { MobileMenuItem, MobileMenuLink, HeaderMenuPanel } from "./styled";
import CONFIG from "../../../config";
import i18n from "../../../utils/i18n";
import { isAdmin } from "../../../utils/client";
import { isMobile } from "../../../utils/screen";

export enum LinkType {
  Inner,
  Outer,
}

const menuDataList = () => [
  {
    type: LinkType.Inner,
    name: i18n.t("navbar.home"),
    url: "/",
  },
];

const urlPrefix = isAdmin() ? "" : `/${CONFIG.USER_TYPE}`;
const MenuItemLink = ({ menu }: { menu: any }) => {
  const { url, type, name } = menu;
  return (
    <MobileMenuLink
      href={type === LinkType.Inner ? `${urlPrefix}${url}` : url}
      target={type === LinkType.Inner ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      {name}
    </MobileMenuLink>
  );
};

export default () =>
  isMobile() ? (
    <MobileMenuItem>
      {menuDataList()
        .filter((menu) => menu.name !== undefined)
        .map((menu) => (
          <MenuItemLink menu={menu} key={menu.name} />
        ))}
    </MobileMenuItem>
  ) : (
    <HeaderMenuPanel>
      {menuDataList()
        .filter((menu) => menu.name !== undefined)
        .map((menu) =>
          menu.type === LinkType.Inner ? (
            <Link className="header__menus__item" to={menu.url} key={menu.name}>
              {menu.name}
            </Link>
          ) : (
            <a
              className="header__menus__item"
              href={menu.url}
              target="_blank"
              rel="noopener noreferrer"
              key={menu.name}
            >
              {menu.name}
            </a>
          )
        )}
    </HeaderMenuPanel>
  );
