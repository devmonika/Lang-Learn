import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import CourseType from '../CourseType/CourseType';

const AllCourses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center my-8'>All Courses</h2>
            <div className='block lg:flex'>
                <div className='pl-5 pt-4 w-1/3'>
                    <Sidebar></Sidebar>
                </div>
                <div className='mr-5'>
                    <CourseType></CourseType>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;