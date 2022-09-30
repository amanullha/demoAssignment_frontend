import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { Button, TextField } from '@mui/material';



const Login = () => {

    let errorMessage;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (user) {
            navigate(from, { replace: true });

        }
    }, [user, from, navigate])


    if (loading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <Loading />
        </div>
    }

    if (error) {
        errorMessage = <span className="label-text-alt text-red-500 ">{error?.message}</span>
    }



    // if (user) {
    //     navigate(from, { replace: true });

    // }



    const onSubmit = data => {
        console.log(data);

        const email = data.email;
        const password = data.password;

        signInWithEmailAndPassword(email, password);
    }


    const goToSignUp = () => {
        navigate('/signup');
    }


    return (
        <div className='flex justify-center items-center  h-screen'>

            <div className="card  bg-base-100 shadow-xl px-10 py-16">
                <div className="card-body flex flex-col justify-center items-center">

                    <h2 className=" tex-center text-3xl font-bold card-title">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)} container='true' className=''>


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
                        <div className="form-control w-full max-w-xs my-5">


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
                            {/* <h1 className='text-sm text-secondary font-bold cursor-pointer'></h1> */}
                            <Button onClick={() => navigate('/forget-password')}>Forget password?</Button>

                        </div>

                        <Button className='btn w-full max-w-xs text-white tracking-wider' type="submit" variant="contained" >Login</Button>


                    </form>

                    <div>
                        <span className='text-xs'>Haven't account?  </span>
                        <Button onClick={goToSignUp} className='text-sm ml-2 cursor-pointer text-secondary active:font-bold'> Create new account </Button>
                    </div>


                    <div className="divider">OR</div>
                    <Social />
                </div>



            </div>

        </div>
    );
};

export default Login;