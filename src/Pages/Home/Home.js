import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../../Shared/Course/Course';
import About from '../About/About';
import Heroarea from '../HeroArea/Heroarea';

const Home = () => {
    const courese = useLoaderData();
    return (
        <div>
            <Heroarea></Heroarea>
            <div>
                <About></About>
            </div>
            <h2 className='font-semibold text-4xl my-8 text-center'>All Courses</h2>
            <div  className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-5 my-8 p-10'>
                {
                    courese?.slice(0,6).map(course => <Course key={course.id} course={course}>
                    </Course>)
                }

            </div>
            
        <Link className='flex justify-center mb-10' to="/courses"><button className="btn btn-primary">All Courses</button></Link>
        
        </div>
        
    );
};

export default Home;