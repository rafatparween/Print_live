import React from 'react';

export default function Goodlooking() {
    return (
        <section className="relative flex items-center justify-between bg-blue-900 text-white py-10 px-6 h-[500px]">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
            >
                <source
                    src="https://videos.pexels.com/video-files/4124026/4124026-uhd_2732_1440_25fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="relative z-10 w-1/2 space-y-6">
                {/* <h2 className="text-xl font-semibold ">Unlock Your Business Potential</h2> */}
                <h1 className='text-[24px]'>Unlock Greater Rewards with Every Purchase!</h1>
                <p className='text-[24px]'>
                    Transform your business with our state-of-the-art printers, tablets, Wi-Fi, and networking solutions, along with advanced mobile audio and video technology. Discover enhanced productivity and performance like never before.
                </p>
                <p>
                    Earn rewards on your purchases to use towards your next order. *Terms and conditions apply.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn More
                </button>
            </div>
        </section>
    );
}