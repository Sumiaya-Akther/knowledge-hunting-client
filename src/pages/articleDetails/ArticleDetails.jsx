import React from 'react';
import { useLoaderData } from 'react-router';

const ArticleDetails = () => {
    const article = useLoaderData();
    console.log(article);
    
    return (
        <div>
            <h1>article:</h1>
        </div>
    );
};

export default ArticleDetails;