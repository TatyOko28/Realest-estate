import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
    // Use useSelector hook to access the alerts state from Redux
    const alerts = useSelector(state => state.alert);

    return (
        <>
            {alerts?.length > 0 && alerts.map(alert => (
                <div key={alert.id} className={`alert alert--${alert.alertType}`}>
                    {alert.msg}
                </div>
            ))}
        </>
    );
};

export default Alert;
