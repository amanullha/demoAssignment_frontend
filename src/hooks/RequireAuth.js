// import React from 'react';

// const RequireAuth = () => {

//     return (
//         <div>

//         </div>
//     );
// };

// export default RequireAuth;\



// import React, { useEffect, useState } from 'react';
// import auth from '../firebase.init';

// const useAdmin = (user) => {
//     // console.log("useAdmin user: ", user);

//     const [admin, setAdmin] = useState(false);

//     const [adminLoading, setAdminLoading] = useState(true);

//     useEffect(() => {

//         const email = user?.email;


//         const getTestAdmin = async () => {


//             fetch(`https://paint-house-backend.onrender.com/admin/${email}`,

//                 {
//                     method: 'GET',
//                     headers: {
//                         authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                     }
//                 }

//             )
//                 .then(res => res.json())
//                 .then(data => {

//                     // console.log("data.admin: ",data.admin);

//                     setAdmin(data.admin)

//                     setAdminLoading(false);


//                 })
//         }

//         getTestAdmin();






//     }, [user])

//     // console.log('age return : ',admin);

//     return [admin, adminLoading];
// };

// export default useAdmin;