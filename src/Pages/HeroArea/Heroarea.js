import React from 'react';

const Heroarea = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
                        <p className="mb-5 text-2xl">Come Join Us To Fullfill Your Journey To Learn Different Languages.</p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Heroarea;