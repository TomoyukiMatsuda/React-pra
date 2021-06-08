import {Home} from "../components/pages/Home";
import {UserManagement} from "../components/pages/UserManagement";
import {Setting} from "../components/pages/Setting";
import {Page404} from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  },
];
