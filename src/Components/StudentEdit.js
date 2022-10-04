import { Button, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const StudentEdit = ({ refetch, setRefetch, studentObj, handleClose, setMessage }) => {

    const [student, setStudent] = useState(studentObj);

    const [show, setShow] = useState(false);

    const updateData = async () => {





        const res = await axios.put(`http://localhost:5000/update-student/${studentObj?._id}`, student)

        console.log("update ", res);



        if (res?.data?.modifiedCount) {
            setMessage('Updated student info Successfully!!')
            handleClose();
            setRefetch(1 ^ refetch);
        }

    }

    // {
    //     headers: {
    //         'content-type': 'application/json',
    //         }

    // },



    return (
        <div>

            <h1 className='text-xl text-center my-5'>Edit Student information</h1>

            <div>

                <div>
                    {/* <form  container='true' className=''> */}


                    <div className=' flex gap-2 flex-col md:flex-row'>
                        <div className="form-control w-full max-w-xs my-5">


                            <TextField
                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.firstName = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}

                                className='w-full'
                                id="outlined-firstName-input"
                                label="First Name"
                                type="text"
                                focused='true'

                                value={student?.firstName}


                            />



                        </div>
                        <div className="form-control w-full max-w-xs my-5">


                            <TextField
                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.middle = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                className='w-full'
                                id="outlined-middleName-input"
                                label="Middle Name"
                                type="text"
                                autoComplete="current-middleName"
                                focused='true'

                                value={student?.middle}

                            />



                        </div>
                        <div className="form-control w-full max-w-xs my-5">


                            <TextField
                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.lastName = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                className='w-full'
                                id="outlined-lastName-input"
                                label="last Name"
                                type="text"
                                autoComplete="current-lastName"
                                focused='true'

                                value={student?.lastName}

                            />



                        </div>
                    </div>


                    <div className="flex gap-2 flex-col md:flex-row">

                        <div className="form-control w-full max-w-xs my-5">




                            <TextField

                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.lastName = e.class.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}


                                id="id"
                                name="class"
                                select
                                native="true"
                                label="Class"
                                margin="normal"
                                variant="outlined"
                                className='w-full'
                                focused='true'

                                value={student?.class}


                            >
                                <MenuItem value={student?.class}></MenuItem>

                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cl, i) => {
                                        return <MenuItem key={i} value={cl}>Class {cl}</MenuItem>
                                    })
                                }
                            </TextField>


                        </div>

                        <div className="form-control w-full max-w-xs my-5">




                            <TextField

                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.division = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}


                                id="id"
                                name="division"
                                select
                                native="true"
                                label="Division"
                                margin="normal"
                                variant="outlined"
                                className='w-full'
                                focused="true"
                                value={student?.division}



                            >
                                {
                                    ['A', 'B', 'C', 'D', 'E'].map((cl, i) => {
                                        return <MenuItem key={i} value={cl}>Division {cl}</MenuItem>
                                    })
                                }
                            </TextField>



                        </div>


                        <div className="form-control w-full max-w-xs my-5 mt-[36px]">



                            <TextField
                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.roll = parseInt(e.target.value);

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                className='w-full'
                                id="outlined-roll-input"
                                label="Enter Roll Number in Digit"
                                type="number"
                                autoComplete="current-roll"
                                name="roll"
                                focused="true"
                                value={student?.roll}


                            />


                        </div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">

                        <div className="form-control w-full my-5">



                            <TextField
                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.Address1 = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                className='w-full'
                                id="outlined-multiline-static"
                                label="Address 1"
                                multiline
                                rows={2}

                                name='address1'
                                focused="true"
                                value={student?.address1}


                            />


                        </div>
                        <div className="form-control w-full my-5">



                            <TextField

                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.Address2 = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                name='address2'

                                className='w-full'
                                id="outlined-multiline-static"
                                label="Address 2"
                                multiline
                                rows={2}
                                focused="true"
                                value={student?.address2}


                            />

                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="form-control w-full max-w-xs my-5">




                            <TextField
                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.landMark = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                name="landMark"
                                label="Lang Mark"
                                className='w-full'
                                type='text'
                                focused="true"
                                value={student?.landMark}

                            >

                            </TextField>



                        </div>

                        <div className="form-control w-full max-w-xs my-5">




                            <TextField
                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.city = e.target.value;

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                name="city"
                                label="city"
                                className='w-full'
                                type='text'
                                focused="true"
                                value={student?.city}


                            >

                            </TextField>


                        </div>





                        <div className="form-control w-full max-w-xs mt-5">



                            <TextField

                                onChange={(e) => {
                                    const _student = { ...student };
                                    _student.pinCode = parseInt(e.target.value);

                                    setStudent(_student)
                                    setShow(true)
                                }}
                                className='w-full'
                                id="outlined-password-input"
                                label="Pin code"
                                type="number"
                                autoComplete="current-password"
                                focused="true"
                                value={student?.pinCode}
                                name='pinCode'


                            />


                        </div>
                    </div>



                    {
                        show ?
                            <Button onClick={updateData} className='btn w-full max-w-xs text-white tracking-wider' type="submit" variant="contained" style={{ backgroundColor: 'red' }}>Save</Button>
                            :
                            <Button disabled className='btn w-full max-w-xs text-white tracking-wider' type="submit" variant="contained" style={{ backgroundColor: 'red' }}>Save</Button>
                    }


                    {/* </form> */}
                </div>

            </div>

        </div>
    );
};

export default StudentEdit;