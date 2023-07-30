import React from 'react';
import ProductDetails from '../../component/ProductDetails/ProductDetails';
import CommonPage from '../../Shared/CommonPage/CommonPage';

const Home = () => {
    return (
        <div>
            <CommonPage></CommonPage>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default Home;