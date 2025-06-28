import React, { useState } from 'react';
import CartMenu from '../../Shared/CartMenu/CartMenu';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const FoodTab = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-6 mx-4 md:mx-20'>
                        {
                            items.slice(currentPage*6-6, currentPage*6).map(item => <CartMenu
                                key={item._id}
                                item={item}
                            ></CartMenu>)
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodTab;