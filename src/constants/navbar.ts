import { DASHBOARD, SETTINGS } from "./routePath";


import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type DrawerMenu = {
    name: string
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
    route: string
}

export const NAV_WIDTH = 240;
export const USER_MENU = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const DRAWER_MENU: DrawerMenu[] = [
    {
        name: 'Dashboard',
        icon: HomeIcon,
        route: DASHBOARD
    },
    {
        name: "Settings",
        icon: SettingsIcon,
        route: SETTINGS
    }
]