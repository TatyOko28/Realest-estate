import { v5 as uuidv5 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// Ensure this is a valid UUID. For demonstration, I'm using a UUID in the correct format.
// Replace "YOUR_NAMESPACE_UUID" with your actual namespace UUID.
const NAMESPACE_UUID = '1b671a64-40d5-491e-99b0-da01ff1f3341';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    // Ensure the message is a non-empty string and the namespace is a valid UUID.
    if (typeof msg !== 'string' || !msg.trim().length) {
        console.error('Message must be a non-empty string.');
        return;
    }

    try {
        const id = uuidv5(msg, NAMESPACE_UUID);

        dispatch({
            type: SET_ALERT,
            payload: { msg, alertType, id }
        });

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    } catch (error) {
        console.error('Failed to generate a UUID:', error);
    }
};
