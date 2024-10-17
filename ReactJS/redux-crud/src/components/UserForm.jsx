// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from '../actions/userActions';

const UserForm = ({ selectedUser, setSelectedUser }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
        } else {
            setName('');
            setEmail('');
        }
    }, [selectedUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedUser) {
            dispatch(updateUser({ ...selectedUser, name, email }));
        } else {
            dispatch(addUser({ id: Date.now(), name, email }));
        }
        setName('');
        setEmail('');
        setSelectedUser(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">{selectedUser ? 'Update' : 'Add'} User</button>
        </form>
    );
};

export default UserForm;
