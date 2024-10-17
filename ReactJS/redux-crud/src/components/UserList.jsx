// src/components/UserList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../actions/userActions';

const UserList = ({ setSelectedUser }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const handleEdit = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
