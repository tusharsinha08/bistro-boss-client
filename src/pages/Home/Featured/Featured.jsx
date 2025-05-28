import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${featuredImg})` }}
        >
            <div className='bg-black bg-opacity-60 pt-8'>
                <SectionTitle
                    subHeading={"check it out"}
                    heading={"Featured Item"}
                ></SectionTitle>
                <div className='md:flex items-center justify-center pb-20 pt-12 px-36'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p>Aug 20, 2029</p>
                        <p className='uppercase'>Where can I get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt et, voluptate suscipit ad repellendus dolores soluta ipsum vero mollitia possimus ea eum at vel beatae quidem aspernatur unde eius voluptatem recusandae, placeat facilis qui. Architecto odit itaque aliquam totam! Cupiditate architecto ea accusamus corrupti ab nam repellendus magnam quae!</p>
                        <button className="btn btn-neutral btn-outline text-white border-0 border-b-4 mt-4">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;