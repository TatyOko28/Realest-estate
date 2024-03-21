import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Listings from './containers/Listings';
import ListingDetail from './containers/ListingDetail';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import NotFound from './components/NotFound';
import Layout from './hocs/Layout';
import PrivateRoute from './components/PrivateRoute'; // Ensure this is updated for v6

import { Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Apropos' element={<About />} />
                    <Route path='/Contacte' element={<Contact />} />
                    <Route path='/Details' element={<Listings />} />
                    <Route path='/Details/:id' element={
                        <PrivateRoute>
                            <ListingDetail />
                        </PrivateRoute>
                    } />
                    <Route path='/Se connecter' element={<Login />} />
                    <Route path='/Inscription' element={<SignUp />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>
);

export default App;
