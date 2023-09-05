/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const user = useLoaderData()
    //console.log(users);
    const [displayUser, setDisplayUser] = useState(user)
    const handleDelete = (user) => {

        const agree = window.confirm(`Are you want to Delete ${user?.name}`)
        if (agree == true) {
            //console.log(user);
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: "DELETE"
            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User Deleted Successfully')
                        const remainingUsers = displayUser.filter(useri => useri._id !== user._id)
                        setDisplayUser(remainingUsers)
                    }

                    //console.log(data);
                })


        }


    }
    return (
        <div>
            <h1 className="text-3xl font-bold underline">This is our Home World !</h1>
            <div>
                {
                    displayUser.map(user => <div className='flex py-3' key={user._id}>
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.img} />
                            </div>
                        </div>

                        <p className='text-warning text-2xl m-3'>
                            {/* for deleting user onClick event and user. is used as a parameter of handleDelete function */}
                            Name: {user.name} ++ Email: {user.email}

                        </p>
                        <Link className="btn btn-success mx-5" to={`/update/${user._id}`}>Update</Link>
                        <button onClick={() => handleDelete(user)} className="btn btn-outline btn-error btn-circle">X</button>
                    </div>
                    )




                }
            </div>
        </div>
    );
};

export default Home;