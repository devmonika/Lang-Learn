import React from 'react';
import { Link } from 'react-router-dom';

const Heroarea = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.postimg.cc/9QyJp9NN/language-learning-1200x675.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
                        <p className="mb-5 text-2xl">Come Join Us To Fullfill Your Journey To Learn Different Languages.</p>
                        <Link to="/courses"><button className="btn btn-primary">Get Started</button></Link>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Heroarea;