import React from 'react';
import Banner from '../../components/banner/Banner';
import FeaturedArticles from '../../components/featuredArticles/FeaturedArticles';
import { useLoaderData } from 'react-router';
import Caterogirs from '../../components/categories/Caterogirs';
import Testimonials from '../../components/testmonial/Testimonials';


const Home = () => {
    const data = useLoaderData();
    // const articles = data?.data;
   // console.log(data.data);
    
    return (
        <div>
            <Banner></Banner>
            <FeaturedArticles></FeaturedArticles>
            <Caterogirs data={data}></Caterogirs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;