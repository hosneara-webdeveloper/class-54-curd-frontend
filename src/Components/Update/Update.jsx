/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';




const Update = () => {
  const storedUser = useLoaderData();
  const navigate = useNavigate();
  const [user, setUser] = useState(storedUser);


  const handleOnSubmit = (event) => {
    event.preventDefault();
    //console.log(user);
    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          navigate('/')

        }
      })

  }



  {/* Data withdraw */ }

  const handleOnBlur = (event) => {
    const field = event.target.name;
    //console.log(field);
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    //console.log(user);
  }


  return (
    <div>
      Update {user.name}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add users!</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleOnSubmit}>
                {/* name , email and address  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input defaultValue={user.name} onBlur={handleOnBlur} type="text" name="name" placeholder="Name" className="input input-bordered" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input defaultValue={user.address} onBlur={handleOnBlur} type="text" name="address" placeholder="Address" className="input input-bordered" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input onBlur={handleOnBlur} type="number" name="phone" defaultValue={user.phone} placeholder="Write Your Phone Number" className="input input-bordered" />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input defaultValue={user.email} onBlur={handleOnBlur} type="email" name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Update Photo</span>
                  </label>
                  <input defaultValue={user.img} onBlur={handleOnBlur} type="text" name="img" placeholder="Enter Photo url" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-success">Update User</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;