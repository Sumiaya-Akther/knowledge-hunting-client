import React from 'react';
import Banner from '../../components/banner/Banner';
import FeaturedArticles from '../../components/featuredArticles/FeaturedArticles';
import { useLoaderData } from 'react-router';
import Caterogirs from '../../components/categories/Caterogirs';
import Testimonials from '../../components/testmonial/Testimonials';
import WritingsTips from '../../components/writingTips/WritingsTips';


const Home = () => {
    const data = useLoaderData();
    // const articles = data?.data;
   // console.log(data.data);
    
    return (
        <div className='p-2'>
            <Banner></Banner>
            <FeaturedArticles></FeaturedArticles>
            <Caterogirs data={data}></Caterogirs>
            <Testimonials></Testimonials>
            <WritingsTips></WritingsTips>
        </div>
    );
};

export default Home;