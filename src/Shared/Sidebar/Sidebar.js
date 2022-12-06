import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [courseTypes, setCourseType] = useState([]);

    useEffect(() => {
        fetch('https://lang-learn-server.vercel.app/course-type')
        .then(res=> res.json())
        .then(data => setCourseType(data))
    },[])
    return (
        <div className='flex lg:block gap-2 m-2'>
            {
                courseTypes.map(courseType => <p className='bg-white shadow-lg my-2 py-5 text-center' key={courseType.id}>
                    <Link to = {`/course-type/${courseType.id}`}>{courseType.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Sidebar;