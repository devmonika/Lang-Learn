import React from 'react';

const About = () => {
    return (
        <div>
             <div className="hero min-h-screen bg-base-200 pt-16">
            
            <div className="hero-content flex-col lg:flex-row justify-center">
                <div className='w-full lg:w-1/2 flex justify-center gap-5 bg-clip-content'>
                    <img src="https://i.postimg.cc/PfzPZxqt/find-your-tutor.webp" className=" transition delay-150 duration-300 ease-in-out relative hover:rotate-6 h-96 bg-center bg-cover w-96 rounded-lg  shadow-lg shadow-primary-500/50" />
                </div>
                <div className='w-full lg:w-1/2'>
                <h1 className="text-5xl font-bold">Learn at your own pace</h1>
                <p className="py-6">Take advantage of our bite-sized lessons so you can study at a time that's best for you. You'll only see exercises at the right level for you and can achieve certificates when you pass each level.</p>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;