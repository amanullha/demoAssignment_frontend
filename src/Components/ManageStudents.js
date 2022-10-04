import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteStudent from './DeleteStudent';
import StudentView from './StudentView';
import StudentEdit from './StudentEdit';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#f50000',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#fff6f5",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    borderRadius: "20px",
    p: 4,
};

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const ManageStudents = () => {

    const [students, setStudents] = useState([])

    const [refetch, setRefetch] = useState(false);

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {


        setIsLoading(true);
        fetch('http://localhost:5000/get-students', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }

        })
            .then(res => res.json())
            .then(data => {
                setStudents(data);
                setIsLoading(false);

            })

    }, [refetch])


    /*
        const { isLoading, error, data: students, refetch } = useQuery(['repoData'], () => fetch('http://localhost:5000/get-students').then(res => res.json()));
        */

    // const { isLoading, error, data: students, refetch } = useQuery(['repoData'], () =>
    //     fetch('http://localhost:5000/get-students').then(res =>
    //         res.json()
    //     )
    // )

    const [open, setOpen] = React.useState(false);
    const [modalNbr, setModalNbr] = useState(null);
    const [selectStudent, setSelectStudent] = useState(null);
    const [message, setMessage] = useState(null);

    if (message) {

        setTimeout(() => {
            setMessage(null)
        }, 2000);
    }

    const handleOpen = (nbr, index) => {
        setOpen(true);
        setModalNbr(nbr)
        setSelectStudent(students[index]);
    }
    const handleClose = (nbr, index) => {
        setOpen(false);
        setModalNbr(nbr)
        setSelectStudent(null)
    }


    if (isLoading) {
        return <h1>Loading...</h1>
    }


    return (

        <div>
            <h1 className='font-bold  tracking-wide py-5'>Manage Student</h1>
            <h1 className='text-lg my-2'>Add student</h1>
            {
                message ?
                    <h1 className='text-green-600 text-center'>{message}</h1>

                    : ''
            }

            <TableContainer component={Paper}>



                <Table sx={{ minWidth: 700 }} aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Class</StyledTableCell>
                            <StyledTableCell align="right">Roll No</StyledTableCell>
                            <StyledTableCell align="right">View/Edit/Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {students?.map((row, index) => (

                            <StyledTableRow key={row?.firstName}>

                                <StyledTableCell component="th" scope="row">
                                    {row?.firstName + ' ' + row?.middle + ' ' + row?.lastName}
                                </StyledTableCell>

                                <StyledTableCell align="right">{row?.class}</StyledTableCell>

                                <StyledTableCell align="right">{row?.roll}</StyledTableCell>

                                <StyledTableCell align="right">

                                    <RemoveRedEyeIcon onClick={() => handleOpen(1, index)} className="text-red-500 cursor-pointer" />
                                    <BorderColorIcon onClick={() => handleOpen(2, index)} className="text-red-500 cursor-pointer mx-3" />
                                    <DeleteOutlineIcon onClick={() => handleOpen(3, index)} className="text-red-500 cursor-pointer" />

                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>

                </Table>

            </TableContainer>













            {/* Delete Modal  */}

            <div className='bg-white'>
                {/* <Button >Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {
                            modalNbr === 3 ?

                                <DeleteStudent
                                    key={modalNbr}
                                    refetch={refetch}
                                    setRefetch={setRefetch}
                                    student={selectStudent}
                                    handleClose={handleClose}
                                    setMessage={setMessage}

                                />


                                : ''
                        }
                        {
                            modalNbr === 1 ?

                                <StudentView
                                    key={modalNbr}
                                    refetch={refetch}
                                    setRefetch={setRefetch}
                                    student={selectStudent}
                                    handleClose={handleClose}
                                    setMessage={setMessage}

                                />


                                : ''
                        }
                        {
                            modalNbr === 2 ?

                                <StudentEdit
                                    key={modalNbr}
                                    refetch={refetch}
                                    setRefetch={setRefetch}
                                    studentObj={selectStudent}
                                    handleClose={handleClose}
                                    setMessage={setMessage}

                                />


                                : ''
                        }
                    </Box>
                </Modal>
            </div>








        </div>
    );
};

export default ManageStudents;