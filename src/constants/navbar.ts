import { DASHBOARD, SETTINGS } from "./routePath";


import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import TransactionsIcon from "../assets/icons/TransactionsIcon";
import AccountsIcon from "../assets/icons/AccountsIcon";
import InvestmentIcon from "../assets/icons/InvestmentIcon";
import CreditCardIcon from "../assets/icons/CreditCardIcon";
import LoanIcon from "../assets/icons/LoanIcon";
import ServiceIcon from "../assets/icons/ServiceIcon";
import PrivilegeIcon from "../assets/icons/PrivilegeIcon";

export type DrawerMenu = {
    name: string
    icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
    route: string;
    disabled?: boolean;
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
        name: 'Transactions',
        icon: TransactionsIcon,
        route: DASHBOARD,
        disabled: true
    },
    {
        name: 'Accounts',
        icon: AccountsIcon,
        route: DASHBOARD,
        disabled: true
    },
    {
        name: 'Investments',
        icon: InvestmentIcon,
        route: DASHBOARD,
        disabled: true
    },
    {
        name: 'Credit Cards',
        icon: CreditCardIcon,
        route: DASHBOARD,
        disabled: true
    },
    {
        name: 'Loans',
        icon: LoanIcon,
        route: DASHBOARD,
        disabled: true
    },
    {
        name: 'Services',
        icon: ServiceIcon,
        route: DASHBOARD,
        disabled: true
    },
    {
        name: 'My Privileges',
        icon: PrivilegeIcon,
        route: DASHBOARD,
        disabled: true
    },
    {
        name: "Settings",
        icon: SettingsIcon,
        route: SETTINGS
    }
]