import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// Initial state for alerts, clearly an empty array indicating no alerts initially
const initialState = [];

// Function name updated to reflect its purpose more clearly
export default function alertReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_ALERT:
            // Adds a new alert to the state, ensuring immutability
            return [...state, payload];
        case REMOVE_ALERT:
            // Removes an alert by id, ensuring immutability
            return state.filter(alert => alert.id !== payload);
        default:
            // Returns the current state if no action matches
            return state;
    }
}
