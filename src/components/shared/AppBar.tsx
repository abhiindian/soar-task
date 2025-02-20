import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NAV_WIDTH as drawerWidth } from '../../Constants/navbar';
import UserMenu from './UserMenu';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const Bar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    backgroundColor: 'white',
    height: '80px'
}));

type Props = {
    open: boolean,
}

const AppBar = ({ open }: Props) => {
    return (
        <Bar
            position="fixed"
            open={open}
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}>
            <Toolbar>
                <div style={{
                    flexGrow: 1,
                }}>
                    <Typography variant="h6" noWrap component="div" sx={{ color: '#343C6A', mt: 1.5 }}>
                        OVERVIEW
                    </Typography>
                </div>

                <UserMenu />
            </Toolbar>
        </Bar>
    )
}

export default AppBar