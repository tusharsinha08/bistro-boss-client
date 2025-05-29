import React from 'react';
import bgImage from '../../../assets/home/banner.jpg'
import Cover from '../../Shared/Cover/Cover';

const Description = () => {
    return (
        <div className='md:mx-20'>
            <Cover
                img={bgImage}
                title={"Bistro Boss"}
                subTitle={"Serving bold flavors and unforgettable meals — your go-to spot for delicious bites and cozy dining vibes."}
            ></Cover>
        </div>
    );
};

export default Description;