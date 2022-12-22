import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    console.log(course);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img src={course.image_url} alt="Shoes" className='h-60 w-full'/></figure>
            <div className="card-body">
                <h2 className="card-title">
                {course.title}
                </h2>
                <p>{course.details?.slice(0,90)}</p>
                
                <div className="flex items-center card-actions justify-end">
                <p className='text-2xl font-bold text-primary'><span className=''>Fee: {course.price}</span></p>
                <Link to={`/details/${course.id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Course;