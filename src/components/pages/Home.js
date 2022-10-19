import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ users, onDelete}) => {

    // const {id, name, username, email, onDelete} = ;

    const handleDelete = (id) => {
        onDelete(id);
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>User Name</th>
                            <th scope='col'>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>
                            <tr>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className='btn btn-primary me-2' to={`/users/${user.id}`}>View</Link>
                                    <Link className='btn btn-outline-primary me-2' to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</Link>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;