import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ onAdd }) => {
    let navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value, e.target.username.value, e.target.email.value, e.target.phone.value, e.target.website.value);
        e.target.name.value = "";
        e.target.username.value = "";
        e.target.email.value = "";
        e.target.phone.value = "";
        e.target.website.value = "";
        navigate('/');
      };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Website Name"
                            name="website"
                        />
                    </div>
                    <button onSubmit={handleOnSubmit} className="btn btn-primary btn-block mt-2">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;