import React from 'react';

const Faq = () => {
    return (
        <div className='p-5'>
            <h2 className='text-4xl text-center font-semibold my-8'>Some FAQ & Answers</h2>
            <div className="collapse my-5 shadow">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    <h2>What is the difference between Firebase and MongoDB ?</h2>
                </div>
                <div className="collapse-content"> 
                
                    <p>Both Firebase and MongoDB are modern post-relational databases that allow for flexibility and speed to market, while Firebase is more popular for smaller applications, and MongoDB moreso for big data and high-performance use cases.</p>
                </div>
            </div> 
            <div className="collapse mb-5 shadow">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                What do you understand by refs in React?
                </div>
                <div className="collapse-content"> 
                    <p>Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.</p>
                </div>
            </div>
            <div className="collapse mb-5 shadow">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                What is AuthContext used for?
                </div>
                <div className="collapse-content"> 
                    <p>The AuthContext provides the implementation for authenticating users. A typical caller instantiates this class and starts the login process. The caller then obtains an array of Callback objects, which contains the information required by the authentication plug-in module. The caller requests information from the user.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;