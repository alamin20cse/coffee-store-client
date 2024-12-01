import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const handleuserDelet = (id) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('deleted');


                // delet form the database
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE',



                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Deleted",data)
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });


                            const remaingnig=users.filter(user=>user._id!==id);
                            setUsers(remaingnig);


                        }
                    })

            }
        });

    }


    return (
        <div>
            <h2 className='text-3xl'>Users : {users.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>Last sign in at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>




                                <td><button className='btn'>Edit</button></td>
                                <td><button onClick={() => handleuserDelet(user._id)} className='btn btn-primary'>X</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>












        </div>
    );
};

export default Users;