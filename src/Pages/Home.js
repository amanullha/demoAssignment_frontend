import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>

            <h1>Hello from home</h1>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUP</Link>
            </div>

        </div>
    );
};

export default Home;