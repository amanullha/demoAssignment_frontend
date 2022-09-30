import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, MenuItem, Select, TextField } from '@mui/material';
import auth from '../firebase.init';
import axios from 'axios';
import toast from 'react-hot-toast';


const AddStudent = () => {

    const [add, setAdd] = useState(null);

    let errorMessage;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const onSubmit = async (data) => {
        console.log(data);

        const res = await axios.post('http://localhost:5000/add-student', data);

        if (res?.data?.acknowledged) {

            toast.success("Student added!")
            setAdd("New Student Added Successfully!!!")
        }

        console.log('res: ', res);


    }

    if (add) {

        setTimeout(() => {
            setAdd(null)
        }, 2000);
    }



    const navigate = useNavigate();
    let location = useLocation();

    const date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className=' w-full min-h-screen  mt-10 pr-5'>

            <div className="flex justify-between items-center">
                <h1 className='text-lg'>Add student</h1>
                {
                    add ?
                        <h1 className='text-green-600 text-center'>{add}</h1>

                        : ''
                }
                <h1 className=''>{date.getDate()} {month[date.getMonth()]} {date.getFullYear()} {date.getMinutes()}:{date.getHours()}</h1>

            </div>


            <div>
                <form onSubmit={handleSubmit(onSubmit)} container='true' className=''>


                    <div className=' flex gap-2 flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs my-5">


                            <TextField
                                className='w-full'
                                id="outlined-firstName-input"
                                label="First Name"
                                type="text"
                                autoComplete="current-firstName"
                                {
                                ...register("firstName", {
                                    required: {
                                        value: true,
                                        message: 'First Name is required'
                                    }

                                })
                                }

                            />

                            <label className="label">
                                {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstName.message}</span>}


                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs my-5">


                            <TextField
                                className='w-full'
                                id="outlined-middleName-input"
                                label="Middle Name"
                                type="text"
                                autoComplete="current-middleName"
                                {
                                ...register("middle", {
                                    required: {
                                        value: true,
                                        message: 'Middle Name is required'
                                    }

                                })
                                }

                            />

                            <label className="label">
                                {errors.middleName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.middleName.message}</span>}


                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs my-5">


                            <TextField
                                className='w-full'
                                id="outlined-lastName-input"
                                label="last Name"
                                type="text"
                                autoComplete="current-lastName"
                                {
                                ...register("lastName", {
                                    required: {
                                        value: true,
                                        message: 'last Name is required'
                                    }

                                })
                                }

                            />

                            <label className="label">
                                {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}


                            </label>

                        </div>
                    </div>


                    <div className="flex gap-2 flex-col md:flex-row">

                        <div className="form-control w-full max-w-xs my-5">




                            <TextField
                                id="id"
                                name="class"
                                select
                                native="true"
                                label="Class"
                                margin="normal"
                                variant="outlined"
                                className='w-full'


                                {
                                ...register("class", {
                                    required: {
                                        value: true,
                                        message: 'last Name is required'
                                    }

                                })
                                }

                            >
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cl, i) => {
                                        return <MenuItem key={i} value={cl}>Class {cl}</MenuItem>
                                    })
                                }
                            </TextField>

                            <label className="label">
                                {errors.class?.type === 'required' && <span className="label-text-alt text-red-500">{errors.class.message}</span>}


                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs my-5">




                            <TextField
                                id="id"
                                name="division"
                                select
                                native="true"
                                label="Division"
                                margin="normal"
                                variant="outlined"
                                className='w-full'

                                {
                                ...register("division", {
                                    required: {
                                        value: true,
                                        message: 'last Name is required'
                                    }

                                })
                                }

                            >
                                {
                                    ['A', 'B', 'C', 'D', 'E'].map((cl, i) => {
                                        return <MenuItem key={i} value={cl}>Division {cl}</MenuItem>
                                    })
                                }
                            </TextField>

                            <label className="label">
                                {errors.division?.type === 'required' && <span className="label-text-alt text-red-500">{errors.division.message}</span>}


                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs my-5 mt-[36px]">



                            <TextField
                                className='w-full'
                                id="outlined-roll-input"
                                label="Enter Roll Number in Digit"
                                type="number"
                                autoComplete="current-roll"
                                
                                {
                                ...register("roll", {
                                    required: {
                                        value: true,
                                        message: 'Roll is required'
                                    },

                                })
                                }

                            />

                            <label className="label">
                                {errors.roll?.type === 'required' && <span className="label-text-alt text-red-500">{errors.roll.message}</span>}


                            </label>

                        </div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">

                        <div className="form-control w-full my-5">



                            <TextField
                                className='w-full'
                                id="outlined-multiline-static"
                                label="Address 1"
                                multiline
                                rows={2}

                                name='Address1'
                                {
                                ...register("address1", {
                                    required: {
                                        value: true,
                                        message: 'Address1 is required'
                                    },

                                })
                                }
                            />

                            <label className="label">
                                {errors.address1?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address1.message}</span>}


                            </label>

                        </div>
                        <div className="form-control w-full my-5">



                            <TextField
                                name='Address2'

                                className='w-full'
                                id="outlined-multiline-static"
                                label="Address 2"
                                multiline
                                rows={2}
                                {
                                ...register("address2", {
                                    required: {
                                        value: true,
                                        message: 'Address2 is required'
                                    },

                                })
                                }
                            />

                            <label className="label">
                                {errors.address2?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address2.message}</span>}


                            </label>

                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="form-control w-full max-w-xs my-5">




                            <TextField
                                name="landMark"
                                label="Lang Mark"
                                className='w-full'
                                type='text'
                                {
                                ...register("landMark", {
                                    required: {
                                        value: true,
                                        message: 'Land Mark is required'
                                    },

                                })
                                }
                            >

                            </TextField>

                            <label className="label">
                                {errors.landMark?.type === 'required' && <span className="label-text-alt text-red-500">{errors.landMark.message}</span>}


                            </label>

                        </div>

                        <div className="form-control w-full max-w-xs my-5">




                            <TextField
                                name="city"
                                label="city"
                                className='w-full'
                                type='text'

                                {
                                ...register("city", {
                                    required: {
                                        value: true,
                                        message: 'City is required'
                                    },

                                })
                                }

                            >

                            </TextField>

                            <label className="label">
                                {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}


                            </label>

                        </div>





                        <div className="form-control w-full max-w-xs mt-5">



                            <TextField
                                className='w-full'
                                id="outlined-password-input"
                                label="Pin code"
                                type="number"
                                autoComplete="current-password"
                                {
                                ...register("pinCode", {
                                    required: {
                                        value: true,
                                        message: 'pin Code is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer!'
                                    }
                                })
                                }

                            />

                            <label className="label">
                                {errors.pinCode?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pinCode.message}</span>}
                                {errors.pinCode?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.pinCode.message}</span>}

                            </label>

                        </div>
                    </div>

                    {errorMessage}


                    <Button className='btn w-full max-w-xs text-white tracking-wider' type="submit" variant="contained" style={{ backgroundColor: 'red' }}>Add Student</Button>


                </form>
            </div>


        </div>
    );
};

export default AddStudent;