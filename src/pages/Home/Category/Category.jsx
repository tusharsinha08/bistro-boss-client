import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <section className='md:mx-20 mx-4'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,

                    }}
                    autoplay={{
                        delay: 2500, // 2.5 seconds delay
                        disableOnInteraction: false, // continue autoplay after user interaction
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper mb-12"
                >
                    <SwiperSlide>
                        <div className='relative h-[300px] sm:h-[350px] md:h-[420px] w-full'>
                            <img className='h-full w-full object-cover' src={slide1} alt="" />
                            <h3 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase text-white px-10 py-2'>Salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[300px] sm:h-[350px] md:h-[420px] w-full'>
                            <img className='h-full w-full object-cover' src={slide2} alt="" />
                            <h3 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase text-white px-10 py-2'>Pizzas</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[300px] sm:h-[350px] md:h-[420px] w-full'>
                            <img className='h-full w-full object-cover' src={slide3} alt="" />
                            <h3 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase text-white px-10 py-2'>Soups</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[300px] sm:h-[350px] md:h-[420px] w-full'>
                            <img className='h-full w-full object-cover' src={slide4} alt="" />
                            <h3 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase text-white px-10 py-2'>Desserts</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative h-[300px] sm:h-[350px] md:h-[420px] w-full'>
                            <img className='h-full w-full object-cover' src={slide5} alt="" />
                            <h3 className='absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase text-white px-10 py-2'>Salads</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Category;