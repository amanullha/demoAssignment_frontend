import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../Assets/mainLogo.png'
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';



const Navbar = () => {



    const [user, loading, error] = useAuthState(auth);



    return (
        <div className='w-full bg-white top-0 fixed shadow-lg py-2'>
            <nav className='max-w-7xl mx-auto px-5 flex items-center justify-between'>


                <div>
                    <img src={mainLogo} alt="logo" className='md:w-52 w-40 h-12' />
                </div>

                <div className='flex items-center gap-3'>

                    <Link to='/' >Home</Link>
                    <Link to='/dashboard/add-student' >Dashboard</Link>
                    {
                        !user ?
                            <>
                                <Link to='/login' >Login</Link>
                                <Link to='/signup' >SingUp</Link>

                            </>
                            : ""
                    }
                    {
                        user ? <button onClick={() => signOut(auth)} >LogOut</button> : ''
                    }
                </div>



            </nav>
        </div>
    );
};

export default Navbar;