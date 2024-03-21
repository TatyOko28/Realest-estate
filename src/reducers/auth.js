import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'), // Retrieve the token from localStorage
    isAuthenticated: null, // Initially, we don't know if the user is authenticated
    loading: false // Indicates whether we are in the process of checking the auth state
};

// Naming the function for better debuggability and to resolve the ESLint warning
function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access); // Save the token to localStorage
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access
            };
        case SIGNUP_SUCCESS:
            // Assuming SIGNUP_SUCCESS doesn't log the user in automatically
            // No need to change isAuthenticated or loading here unless you're redirecting to login
            // So, this case could potentially be removed if it doesn't change the state
            return {
                ...state,
                // isAuthenticated: true, // Uncomment if signup logs the user in
                loading: false // Assuming the end of the signup process
            };
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token'); // Clear the token from localStorage
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        default:
            return state;
    }
}

export default authReducer;
