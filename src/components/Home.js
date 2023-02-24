import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelete = user => {
        console.log(user)
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);
        if (agree) {
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully');
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }
                });
        }

    }

    return (
        <div>
            {
                displayUsers.map(user => <p key={user._id}>
                    {user.name} {user.email} {user.address}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                    <button
                        onClick={() => { handleDelete(user) }}
                    >X</button>
                </p>)
            }
        </div>
    );
};

export default Home;