// src/reducers/userReducer.js
import { ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS } from '../actions/actionTypes';

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: [...state.users, action.payload] };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        case FETCH_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default userReducer;
