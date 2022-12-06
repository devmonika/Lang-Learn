import React, { useRef } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';


const DetailsCourse = () => {
    const detailsCourse = useLoaderData();
    const pdf = useRef();

    const {id, category_id, details, image_url, price, title} = detailsCourse;
   
    return (
        <div  ref={pdf} className="dark:bg-gray-800 dark:text-gray-50 my-20">
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div  className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4">
                        <img src={image_url} alt=""/>
                    </div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                       <div className='flex items-center'>
                       <h1 className="text-3xl font-semibold">{title} </h1>
                       {/* pdf attemp */}
                       <ReactToPrint content={() => pdf.current}>
                            <PrintContextConsumer>
                                {({ handlePrint }) => (
                                    <span onClick={handlePrint} className='mt-2 ml-2 text-primary'><FaDownload></FaDownload></span>
                                )}
                            </PrintContextConsumer>
                        </ReactToPrint>
                        {/* pdf attemp */}
                       </div>
                        <p className="flex-1 pt-2">{details}</p>
                        <p className='mb-3'>Course Fee:<span className="text-2xl font-bold text-primary"> {price}</span></p>
                        <div className="flex items-center justify-between ">
                        <Link to={`/checkout/${id}`}>
                            <button className='btn btn-primary'><span> Get Primium Access</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DetailsCourse;