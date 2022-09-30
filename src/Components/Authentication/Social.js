import { Box, Button } from '@mui/material';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import LoadingButton from '@mui/lab/LoadingButton';



const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    const navigate = useNavigate();
    let location = useLocation();



    if (loading) {
        // return <button className="btn loading">loading</button>
        return <LoadingButton loading variant="outlined">
            Submit
        </LoadingButton>
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {

        navigate(from, { replace: true });

    }
    // if (user) {
    //     navigate(from, { replace: true });

    // }





    return (
        <div className='flex flex-col justify-center items-center gap-4'>




            <Button
                variant="contained" color="success"
                onClick={() => signInWithGoogle()}
                className=''
            >Continue with Google</Button>

            {error ? <span className="label-text-alt text-red-500">{error.message}</span> : ""}


        </div>
    );
};

export default Social;