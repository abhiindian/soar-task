import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NAV_WIDTH as drawerWidth, DRAWER_MENU, DrawerMenu } from '../../constants/navbar';
import { useNavigate } from 'react-router-dom';
import { Icon, Typography } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const DrawerHeader = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(0, 1)};
    // necessary for content to be below app bar
    ${({ theme }) => theme.mixins.toolbar};
    height: ${({ theme }) => theme.breakpoints.down('sm') ? '80px' : '120px'};
`;


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),

    }),
);


type SideDrawerProps = {
    open: boolean,
    handleDrawerClose: () => void,
}

const SideDrawer = (sideDrawerProps: SideDrawerProps) => {
    const { open, handleDrawerClose } = sideDrawerProps;
    const navigate = useNavigate()
    return (
        <Drawer variant="permanent" open={true}>
            <DrawerHeader >
                <Icon component={TaskIcon} sx={{ color: 'black', mr: 1 }} />
                <Typography className='bold' variant='h6' sx={{ color: '#343C6A' }}>
                    SOAR TASK
                </Typography>
                {/* <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton> */}
            </DrawerHeader>
            <Divider />
            <List>
                {DRAWER_MENU.map(({ name: text, route, icon: Icon }: DrawerMenu) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        onClick={() => {
                            handleDrawerClose()
                            navigate(route)
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {/* <icon /> */}
                            <Icon />
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                ))}
            </List>
            <Divider />
            {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List> */}
        </Drawer>
    )
}

export default SideDrawer