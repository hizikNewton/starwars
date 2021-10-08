import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
} from "@material-ui/icons";
import { ReactElement } from "react";

type sideBarType = Array<{
  id: number;
  label: string;
  link: string;
  icon: ReactElement;
  children?: Array<{ label: string; link: string }>;
  type?: string;
  nested?: boolean;
}>;

export const SideBarNavs: sideBarType = [
  { id: 0, label: "Dashboard", link: "/report/dashboard", icon: <HomeIcon /> },

  { id: 1, label: "Message", link: "/app/message", icon: <TableIcon /> },
  {
    id: 2,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 3,
    label: "Schedule",
    link: "/app/ui",
    icon: <UIElementsIcon />,
  },
  {
    id: 4,
    label: "History",
    link: "/app/ui",
    icon: <UIElementsIcon />,
  },
  {
    id: 5,
    label: "Settings",
    link: "/app/ui",
    icon: <UIElementsIcon />,
  },
];
