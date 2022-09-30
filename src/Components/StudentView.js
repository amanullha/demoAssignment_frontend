import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';

const StudentView = ({ refetch, student, handleClose, setMessage }) => {








    return (
        <div className='flex flex-col gap-3 relative'>

            <button onClick={handleClose} className='absolute right-0 top-0 rounded-full py-1 px-3 bg-slate-200'>x</button>

            <div className='w-full flex justify-center items-start mt-5'>
                <div className='flex items-center gap-2 mx-auto text-xl font-bold py-5'>
                    <h1>{student?.firstName}</h1>
                    <h1>{student?.middle}</h1>
                    <h1>{student?.lastName}</h1>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <h1 className='font-bold'>Class: </h1>
                <h1>{student?.class}</h1>
            </div>
            <div className="flex items-center gap-2">
                <h1 className='font-bold'>Roll: </h1>
                <h1>{student?.roll}</h1>
            </div>

            <div className="flex items-center gap-2">
                <h1 className='font-bold'>City: </h1>
                <h1>{student?.city}</h1>
            </div>
            <div className="flex items-center gap-2">
                <h1 className='font-bold'>Division: </h1>
                <h1>{student?.division}</h1>
            </div>


            <div className='flex items-center gap-2'>
                <div>
                    <h1 className='font-bold'>Address one: </h1>
                    <h1>{student?.address1}</h1>
                </div>
                <div>
                    <h1 className='font-bold'>Address two: </h1>
                    <h1>{student?.address2}</h1>
                </div>
            </div>

        </div>
    );
};

export default StudentView;