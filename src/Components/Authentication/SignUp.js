import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { Button, TextField } from '@mui/material';

const SignUp = () => {

    let errorMessage;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);



    const navigate = useNavigate();
    let location = useLocation();




    if (loading || updating || sending) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <Loading />
        </div>
    }

    if (error || UpdateError || verifyError) {
        errorMessage = <span className="label-text-alt text-red-500 ">{error?.message} || {UpdateError?.message} || {verifyError.message}</span>
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        if (from !== 'login')
            navigate(from, { replace: true });
        else
            navigate('/home')


    }



    const onSubmit = async (data) => {
        console.log(data);

        const displayName = data.name;
        const email = data.email;
        const password = data.password;



        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        await sendEmailVerification();
    }


    const goToLogin = () => {
        navigate('/login');
    }




    return (
        <div className='flex justify-center items-center  h-screen'>

            <div className="card  bg-base-100 shadow-xl px-10 py-16">
                <div className="card-body flex flex-col justify-center items-center">

                    <h2 className=" tex-center text-3xl font-bold card-title">Register</h2>


                    <form onSubmit={handleSubmit(onSubmit)} container='true' className=''>


                        <div className="form-control w-full max-w-xs my-5">


                            <TextField
                                className='w-full'
                                id="outlined-name-input"
                                label="Name"
                                type="text"
                                autoComplete="current-name"
                                {
                                ...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }

                                })
                                }

                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs my-5">



                            <TextField
                                className='w-full'
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                {
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid email'
                                    }
                                })
                                }

                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>

                        </div>





                        <div className="form-control w-full max-w-xs">



                            <TextField
                                className='w-full'
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                {
                                ...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer!'
                                    }
                                })
                                }

                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>

                        </div>

                        {errorMessage}

                        <div className='flex items-center justify-between mb-3'>
                            <div className='flex items-center gap-1'>
                                <input type="checkbox" name="saveMe" id="saveMe" />
                                <span className='text-sm'>Remember me</span>
                            </div>
                            {/* <h1 onClick={() => navigate('/forget-password')} className='text-sm text-secondary font-bold cursor-pointer'>Forget password?</h1> */}
                            <Button onClick={() => navigate('/forget-password')}>Forget password?</Button>


                        </div>

                        <Button className='btn w-full max-w-xs text-white tracking-wider' type="submit" variant="contained" >SingUp</Button>


                    </form>

                    <div>
                        <span className='text-xs'>Already have an account? </span>
                        <Button onClick={goToLogin} className='text-sm ml-2 cursor-pointer text-secondary active:font-bold'> Login </Button>
                    </div>


                    <div className="divider">OR</div>
                    <Social />
                </div>



            </div>

        </div>
    );
};

export default SignUp;