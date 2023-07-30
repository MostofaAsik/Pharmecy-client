import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import product from '../../assets/images/product.jpg'
import payment from '../../assets/images/payment.png'

const ProductDetails = () => {

    const socials = [
        {

            id: 1,
            link: <FaFacebook />
        },
        {

            id: 2,
            link: <FaTwitter />
        },
        {

            id: 3,
            link: <FaPinterest />
        },
        {

            id: 4,
            link: <FaLinkedin />
        },

    ]

    return (
        <div className=' grid grid-cols-1 md:grid-cols-12 gap-2 mb-4'>
            <div className=' md:col-span-9'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className=' overflow-hidden'>
                        <img src={product} className='transition hover:scale-110 duration-500 overflow-hidden' alt="Product image" />
                    </div>
                    <div className='mt-10 px-6'>
                        <h2 className='text-4xl font-bold'>Blue Shampoo – Peppermint Rosemary Hair Shampoo</h2>
                        <p className='mt-4 flex flex-col md:flex-row md:items-center gap-2 text-2xl'>
                            Customer Review
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />
                        </p>
                        <div className="divider mt-10"></div>
                        <p className='text-2xl text-blue-600'>Price: $55</p>
                        <ul className='pl-4 mt-5 list-disc'>
                            <li>Platea lectus est tortor et euismod hendrerit.</li>
                            <li>Platea lectus est tortor et euismod hendrerit.</li>
                            <li>Platea lectus est tortor et euismod hendrerit.</li>
                            <li>Platea lectus est tortor et euismod hendrerit.</li>
                        </ul>
                        <div className='flex gap-4 mt-4 '>
                            <button className='btn w-20'>1</button>
                            <button className='btn btn-primary'>Add to Cart</button>
                        </div>
                        <div className="divider mt-5"></div>
                        <div className='flex items-center gap-2 mb-3'>
                            <p>Shareit</p>
                            <div className='flex gap-2'>
                                {
                                    socials.map(social => (
                                        <p key={social.id} className='w-10 h-10 flex justify-center items-center text-white px-2 bg-blue-500 rounded-md'>
                                            {social.link}
                                        </p>
                                    ))
                                }

                                {/* 
                                <p className='w-10 h-10 flex justify-center items-center text-white px-2 bg-blue-500'> <FaFacebook></FaFacebook></p> */}

                            </div>

                        </div>
                        <img src={payment} alt="Payment" />
                    </div>
                </div>
            </div>
            <div className=' md:col-span-3 shadow-xl  '></div>
        </div>
    );
};

export default ProductDetails;