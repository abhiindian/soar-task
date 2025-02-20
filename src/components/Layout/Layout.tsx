import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Container, Divider, Drawer, Icon, List,
    ListItemButton, ListItemIcon, ListItemText,
    Typography, AppBar,
    IconButton,
    Toolbar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TaskIcon from '@mui/icons-material/Task';
import { DrawerHeader } from '../shared/SideDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import UserMenu from '../shared/UserMenu';
import { DrawerMenu, DRAWER_MENU } from '../../constants/navbar';

const drawerWidth = 240;



type Props = {
    window?: () => Window;
}

export default function Layout({ children, window }: React.PropsWithChildren<Props>) {


    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const navigate = useNavigate();

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <>
            <DrawerHeader >
                <Icon component={TaskIcon} sx={{ color: 'black', mr: 1 }} />
                <Typography className='bold' variant='h6' sx={{ color: '#343C6A' }}>
                    SOAR TASK
                </Typography>
            </DrawerHeader>
            <Divider />
            <List>
                {DRAWER_MENU.map(({ name: text, route, icon: Icon }: DrawerMenu) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            justifyContent: 'initial',
                            px: 2.5,
                        }}
                        onClick={() => {
                            handleDrawerToggle()
                            navigate(route)
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: 3,
                                justifyContent: 'center',
                            }}
                        >
                            {/* <icon /> */}
                            {Icon && <Icon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>

        </>)

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'white',
                    height: '80px'
                }}
            >
                <Toolbar>
                    <IconButton

                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2, mt: 1.5, color: "#343C6A", border: 'none', display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box style={{
                        flexGrow: 1,
                    }}>
                        <Typography variant="h6" noWrap component="div" sx={{ color: '#343C6A', mt: 1.5 }}>
                            OVERVIEW
                        </Typography>
                    </Box>

                    <UserMenu />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Container maxWidth="lg" sx={{ scroll: 'auto', backgroundColor: '#F5F7FA' }}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
}

