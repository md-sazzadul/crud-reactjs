import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = ({onEdit}) => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [id]);

    let navigate = useNavigate();
    
    const handleOnEditSubmit = async(e) => {
        // console.log(id, e.target.name.value, e.target.username.value, e.target.email.value, e.target.phone.value, e.target.website.value);
        e.preventDefault();
        await onEdit(id, e.target.name.value, e.target.username.value, e.target.email.value, e.target.phone.value, e.target.website.value);
        navigate('/');
    };

    return (
        user && <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User #{id}</h2>
                <form onSubmit={handleOnEditSubmit}>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            defaultValue={user.name}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            defaultValue={user.username}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            defaultValue={user.email}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            defaultValue={user.phone}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                            defaultValue={user.website}
                        />
                    </div>
                    <button className="btn btn-warning btn-block mt-2" onSubmit={handleOnEditSubmit}>Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;