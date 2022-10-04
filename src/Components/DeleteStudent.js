import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';

const DeleteStudent = ({ refetch, student, handleClose, setMessage }) => {


    const handleYes = async () => {


        const res = await axios.delete(`https://demoassignment.onrender.com/delete-student/${student?._id}`, {
            headers: {
                'content-type': 'application/json',
            }
        })
        if (res.data.deletedCount) {
            setMessage('Deleted student Successfully!!')
            handleClose();
            refetch();
        }

    }





    return (
        <div>

            <h1 className='text-xl text-center text-red-600'>Are you sure?</h1>

            <h1 className='text-center py-5'>You want to delete <span className='text-yellow-800 font-bold'>{student?.firstName}</span> ?</h1>

            <div className='flex justify-between pb-5 max-w-[200px] mx-auto'>
                <Button onClick={handleClose} variant="contained" color="success">
                    NO
                </Button>
                <Button onClick={handleYes} variant="contained" color="error">
                    YES
                </Button>


            </div>

        </div>
    );
};

export default DeleteStudent;