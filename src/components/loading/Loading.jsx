import React from 'react';
import loadingLotti from '../../assets/lotties/Cute Bird Flapping Animation.json'
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Lottie animationData={loadingLotti} loop={true}>

            </Lottie>
        </div>
    );
};

export default Loading;