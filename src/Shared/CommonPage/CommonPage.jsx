import React from 'react';
import bg1 from '../../assets/images/bg1.jpg'

const CommonPage = () => {
    return (
        <div className="relative md:w-full h-screen md:min-h-screen  bg-cover md:bg-cover bg-center mb-10 " style={{ backgroundImage: `url(${bg1})` }}>
            {/* Overlay with eye-catching opacity */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Your content for the section goes here */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold text-center ">Our only priority is to keep you healthy.</h1>
                {/* <p className="text-lg md:text-xl">This is some captivating content.</p> */}
                <p className="mb-5 mt-4 px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..</p>
                <p className="bg-white text-black py-3 px-6 font-bold">Discovered More</p>
            </div>
        </div>
    );
};

export default CommonPage;