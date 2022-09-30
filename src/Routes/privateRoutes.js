import React from 'react';
import AddStudent from '../Components/AddStudent';
import ManageStudents from '../Components/ManageStudents';
import Dashboard from '../Pages/Dashboard';

export const privateRoutes = [

    {
        Name: "AddStudent",
        Path: "/dashboard/add-student",
        Component: AddStudent,
    },
    {
        Name: "AddStudent",
        Path: "/dashboard/manage-students",
        Component: ManageStudents,
    },

];