import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from 'react-simple-typewriter'
import { Carousel } from 'react-responsive-carousel';
// import banner1 from "../../assets/banner1.jpg"
// import banner2 from "../../assets/banner2.jpg"
// import banner3 from "../../assets/banner3.jpg"
// import banner4 from "../../assets/banner4.jpg"
// import banner5 from "../../assets/banner5.jpg"
import { Link } from 'react-router';

const Banner = () => {
    return (
       <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
        >
            {/* Slide 1 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src="https://i.ibb.co/zhfvrbgf/banner1.jpg" alt="" />
                {/* <img className='w-full h-[570px] object-cover rounded-2xl' src={banner1} alt="Banner 1" /> */}
                <div className='absolute rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                    <h1 className="text-4xl font-bold">
                        Welcome to Knowledge Hunt..
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Articles', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Knowledge management doesn’t happen until somebody reuses something.
                    </p>
                    <Link to="/allArticles">
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Explore Articles</button>
                    </Link>
                </div>
            </div>

            {/* Slide 2 */}
            <div className='relative'>
                <img className='w-full h-[570px] object-cover rounded-2xl' src="https://i.ibb.co/YFTgd8fQ/banner2.jpg" alt="" />
                {/* <img className='w-full h-[570px] object-cover rounded-2xl' src={banner2} alt="Banner 2" /> */}
                <div className='absolute rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                 <h1 className="text-4xl font-bold">
                        Create Your Own Favourite Articles
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Articles', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        “Knowledge can only be volunteered it cannot be conscripted.”
                    </p>
                    <Link to="/allArticles">
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Explore Articles</button>
                    </Link>
                </div>
            </div>

            {/* Slide 3 */}
            <div className='relative'>
                 <img className='w-full h-[570px] object-cover rounded-2xl' src="https://i.ibb.co/h1fnQFrW/banner3.jpg" alt="" />
                {/* <img className='w-full h-[570px] object-cover rounded-2xl' src={banner3} alt="Banner 3" /> */}
                <div className='absolute  rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50  left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                     <h1 className="text-4xl font-bold">
                         Explore Articles & Improve Your Knowledge
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Articles', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        Karl Popper: “All life is problem solving.”
                    </p>
                    <Link to="/allArticles">
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Explore Articles</button>
                    </Link>
                </div>
            </div>

              {/* Slide 4 */}
            <div className='relative'>
                 <img className='w-full h-[570px] object-cover rounded-2xl' src="https://i.ibb.co/tTfDgQT1/banner4.jpg" alt="" />
                {/* <img className='w-full h-[570px] object-cover rounded-2xl' src={banner4} alt="Banner 4" /> */}
                <div className='absolute  rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                     <h1 className="text-4xl font-bold">
                         Explore Articles & Improve Your Knowledge
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Articles', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                       “In the context of real need few people will withhold their knowledge.”
                    </p>
                    <Link to="/allArticles">
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Explore Articles</button>
                    </Link>
                </div>
            </div>
             {/* Slide 5 */}
            <div className='relative'>
                 <img className='w-full h-[570px] object-cover rounded-2xl' src="https://i.ibb.co/KxmNrjNc/banner5.jpg" alt="" />
                {/* <img className='w-full h-[570px] object-cover rounded-2xl' src={banner5} alt="Banner 3" /> */}
                <div className='absolute  rounded-2xl'></div>
                <div className='absolute bottom-40 md:bottom-50 left-1/2 transform -translate-x-1/2 text-center text-black px-4 space-y-4'>
                     <h1 className="text-4xl font-bold">
                        Explore Articles & Improve Your Knowledge
                        <br />
                        <span className="text-indigo-600">
                            <Typewriter
                                words={['Explore Articles', 'Join Communities', 'Find Your Passion']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className='font-medium max-w-xl mx-auto'>
                        “We only know what we know when we need to know it.”
                    </p>
                    <Link to="/allArticles">
                    <button className="btn bg-purple-500 text-white rounded-2xl px-6 py-2">Explore Articles</button>
                    </Link>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;