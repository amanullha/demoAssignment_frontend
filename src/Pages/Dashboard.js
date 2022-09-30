import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import DehazeIcon from '@mui/icons-material/Dehaze';


export default function Dashboard() {

    // console.log(children)

    const [user, loading, error] = useAuthState(auth);

    const location = useLocation().pathname;
    console.log(location)

    const paths = location.split("/");
    const path = paths[paths.length - 1];


    console.log(path)

    const [state, setState] = React.useState({
        bottom: false,

    });


    const navigate = useNavigate();

    const handleLogOut = () => {

        signOut(auth)


        if (path)
            navigate('/login')
        else {
            navigate('/')
        }
    }



    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItem disablePadding style={{ backgroundColor: `${path === 'add-student' ? 'red' : ''}` }}>

                    <ListItemButton>
                        <ListItemIcon>
                            <GroupAddIcon style={{ color: `${path === 'add-student' ? '#FFFFFF' : '#222222'}` }} />
                        </ListItemIcon>
                        <Link style={{ color: `${path === 'add-student' ? '#FFFFFF' : '#222222'}`, fontSize: '18px', fontFamily: 'Arial' }} to='/dashboard/add-student'>Add Student</Link>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding style={{ backgroundColor: `${path === 'manage-students' ? 'red' : ''}` }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <FormatListBulletedIcon style={{ color: `${path === 'manage-students' ? '#FFFFFF' : '#222222'}` }} />
                        </ListItemIcon>
                        <Link style={{ color: `${path === 'manage-students' ? '#FFFFFF' : '#222222'}`, fontSize: '18px', fontFamily: 'Arial' }} to='/dashboard/manage-students'>Manage Students</Link>
                    </ListItemButton>
                </ListItem>

                {
                    user ?
                        <ListItem disablePadding onClick={handleLogOut}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <h1 style={{ color: '#222222', fontSize: '18px', fontFamily: 'Arial' }} >LogOut</h1>
                            </ListItemButton>
                        </ListItem>

                        : ''
                }

            </List>

        </Box>
    );




    return (
        <div className='w-full  z-0 mt-20'>
            <div className='max-w-7xl mx-auto flex z-0'>


                <div className=' lg:hidden fixed '>
                    {['bottom'].map((anchor) => (
                        <React.Fragment key={anchor}>


                            <Button onClick={toggleDrawer(anchor, true)}>

                                <DehazeIcon style={{ color: 'black' }} />
                            </Button>



                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}




                </div>

                <div className=' max-w-[250px] min-h-screen hidden lg:block  z-10 fixed top-40' >


                    <Box

                    >
                        <List>

                            <ListItem disablePadding style={{ backgroundColor: `${path === 'add-student' ? 'red' : ''}` }}>

                                <ListItemButton>
                                    <ListItemIcon>
                                        <GroupAddIcon style={{ color: `${path === 'add-student' ? '#FFFFFF' : '#222222'}` }} />
                                    </ListItemIcon>
                                    <Link style={{ color: `${path === 'add-student' ? '#FFFFFF' : '#222222'}`, fontSize: '18px', fontFamily: 'Arial' }} to='/dashboard/add-student'>Add Student</Link>
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding style={{ backgroundColor: `${path === 'manage-students' ? 'red' : ''}` }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FormatListBulletedIcon style={{ color: `${path === 'manage-students' ? '#FFFFFF' : '#222222'}` }} />
                                    </ListItemIcon>
                                    <Link style={{ color: `${path === 'manage-students' ? '#FFFFFF' : '#222222'}`, fontSize: '18px', fontFamily: 'Arial' }} to='/dashboard/manage-students'>Manage Students</Link>
                                </ListItemButton>
                            </ListItem>

                            {

                                <ListItem disablePadding onClick={handleLogOut}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                        <h1 style={{ color: '#222222', fontSize: '18px', fontFamily: 'Arial' }} >LogOut</h1>
                                    </ListItemButton>
                                </ListItem>


                            }

                        </List>

                    </Box>

                </div>



                <div className='w-full lg:ml-64 h-full lg:px-0 lg:py-0 px-5 py-8'>

                    <div>
                    </div>

                    <Outlet />

                </div>

            </div>
        </div>
    );
}

