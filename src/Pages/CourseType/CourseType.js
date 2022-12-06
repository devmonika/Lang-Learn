import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Shared/Course/Course';

const CourseType = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            
            <div  className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-5 my-8 lg:mx-5'>
                {
                    allCourse.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default CourseType;