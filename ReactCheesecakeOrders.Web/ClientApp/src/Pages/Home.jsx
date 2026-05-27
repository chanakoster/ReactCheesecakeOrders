import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="app-container">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Welcome to the Cheesecake Factory</h1>
                <Link to="/order">
                    <button className="btn btn-dark mb-3">Click here to order</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;