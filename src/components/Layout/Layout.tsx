import * as React from 'react';
import {
    Box, CssBaseline, Container, Divider, Drawer, Icon, List,
    ListItemButton, ListItemIcon, ListItemText, Typography, AppBar,
    IconButton, Toolbar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TaskIcon from '@mui/icons-material/Task';
import { DrawerHeader } from '../shared/SideDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import UserMenu from '../shared/UserMenu';
import { DrawerMenu, DRAWER_MENU } from '../../constants/navbar';
import SearchTextField from '../shared/Search';
import { Notifications, Settings } from '@mui/icons-material';

const drawerWidth = 240;

type LayoutProps = object;

export default function Layout({ children }: React.PropsWithChildren<LayoutProps>) {


    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string>('Dashboard');

    const navigate = useNavigate();

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = (text: string) => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
        setActiveMenu(text);
    };

    const drawer = (
        <>
            <DrawerHeader >
                <Icon component={TaskIcon} sx={{ color: 'black', mr: 1 }} />
                <Typography component='span' sx={{
                    color: '#343C6A',
                    fontFamily: 'Inter',
                    fontStyle: ' normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '30px',
                    mt: 0.25
                }}>
                    SOAR TASK
                </Typography>
            </DrawerHeader>
            <Divider />
            <List>
                {DRAWER_MENU.map(({ name: text, route, icon: Icon, disabled }: DrawerMenu) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            justifyContent: 'initial',
                            px: 2.5,
                        }}
                        onClick={() => {
                            if (activeMenu !== text) {
                                handleDrawerToggle(text);
                                navigate(route);
                            }
                        }}
                        disabled={disabled}
                        selected={activeMenu === text}
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

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'white',
                    height: { sm: '80px', xs: '120px' }
                }}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => handleDrawerToggle('')}
                        sx={{ ml: 2, mt: 1.5, color: "#343C6A", border: 'none', display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: { sm: 'space-between', xs: 'center' },
                        flexDirection: { sm: 'row', xs: 'column' },
                        alignItems: { sm: 'space-between', xs: 'center' },
                    }}>
                        <Typography variant="h6" noWrap component="div" sx={{ color: '#343C6A', mt: 1.75 }}>
                            OVERVIEW
                        </Typography>
                        <SearchTextField placeholder='Search for Something' sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }} />
                    </Box>
                    <IconButton sx={{ mr: 3, display: { xs: 'none', sm: 'block' } }} disableRipple={true}>
                        <Settings />
                    </IconButton>
                    <IconButton sx={{ mr: 3, display: { xs: 'none', sm: 'block' } }} disableRipple={true}>
                        <Notifications />
                    </IconButton>
                    <UserMenu />
                </Toolbar>
                <SearchTextField placeholder='Search for Something' sx={{ display: { xs: 'block', sm: 'none' }, alignSelf: 'center', px: 3.5 }} fullWidth />
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                        '& .MuiDrawer-paper': { width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, margin: 0 }}>
                <Box sx={{ height: { sm: '80px', xs: '120px' } }} />
                <Container maxWidth={false} sx={{
                    backgroundColor: '#F5F7FA',
                    overflowY: 'auto',
                    py: 3
                }}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
}

