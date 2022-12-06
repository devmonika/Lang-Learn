import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Shared/Course/Course';
import Heroarea from '../HeroArea/Heroarea';

const Home = () => {
    const courese = useLoaderData();
    return (
        <div>
            <Heroarea></Heroarea>
            <h2 className='font-semibold text-4xl my-8 text-center'>All Courses</h2>
            <div  className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-5 my-8 p-10'>
                {
                    courese.map(course => <Course key={course.id} course={course}>
                    </Course>)
                }

            </div>
            
        
        </div>
        
    );
};

export default Home;