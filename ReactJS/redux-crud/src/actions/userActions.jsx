// src/actions/userActions.js
import { ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS } from './actionTypes';

// Action to add a user
export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

// Action to update a user
export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user,
});

// Action to delete a user
export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
});

// Action to fetch users (dummy data)
export const fetchUsers = () => {
    return (dispatch) => {
        const users = [
            { id: 1, name: 'Brijesh Gondaliya', email: 'Brijesh@example.com' },
            { id: 2, name: 'raj savaliya', email: 'Eaj@example.com' },
        ];
        dispatch({ type: FETCH_USERS, payload: users });
    };
};
