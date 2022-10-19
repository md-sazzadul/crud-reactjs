import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);

    return (
        user && <div className='container py-4'>
            <Link className='btn btn-primary' to='/'>Back to Home</Link>

            <h1 className='display-4'>User Id: {user.id}</h1>
            <hr />
            <ul className='list-group w-75'>
                <li className="list-group-item"><span className='fw-bold'>Name:</span> {user.name}</li>
                <li className="list-group-item"><span className='fw-bold'>User Name:</span> {user.username}</li>
                <li className="list-group-item"><span className='fw-bold'>Email:</span> {user.email}</li>
                <li className="list-group-item"><span className='fw-bold'>Phone:</span> {user.phone}</li>
                <li className="list-group-item"><span className='fw-bold'>Website:</span> {user.website}</li>
            </ul>


        </div>
    );
};

export default User;