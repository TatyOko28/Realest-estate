import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
    if (loading) {
        // Optionally, handle loading state here, e.g., display a loading indicator
        return <div>Chargement...</div>; // Placeholder for loading state
    }
    return isAuthenticated ? children : <Navigate to="/Se connecter" replace />;
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
