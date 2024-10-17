// src/App.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './actions/userActions';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());  // Fetch users on component mount
    }, [dispatch]);

    return (
        <div>
            <h1>CRUD Operations with React-Redux</h1>
            <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            <UserList setSelectedUser={setSelectedUser} />
        </div>
    );
};

export default App;
