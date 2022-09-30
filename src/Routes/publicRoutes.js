import React from 'react';
import ForgetPassword from '../Components/Authentication/ForgetPassword';
import Login from '../Components/Authentication/Login';
import SignUp from '../Components/Authentication/SignUp';
import Home from '../Pages/Home';

export const publicRoute = [
    {
        Name: "Home",
        Path: "/",
        Component: Home,
    },
    {
        Name: "Login",
        Path: "/login",
        Component: Login,
    },
    {
        Name: "SingUP",
        Path: "/signup",
        Component: SignUp,
    },
    {
        Name: "ForgetPassword",
        Path: "/forget-password",
        Component: ForgetPassword,
    },

];