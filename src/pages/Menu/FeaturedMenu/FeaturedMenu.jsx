import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const FeaturedMenu = ({img, title, subTitle, item}) => {
    return (
        <div className='mb-12'>
            <Cover img={img} title={title} subTitle={subTitle}></Cover>
            <div className='grid md:grid-cols-2 gap-4 mx-4 md:mx-20'>
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-neutral btn-outline text-black border-0 border-b-4 mt-4 rounded-xl hover:text-white uppercase text-xl p-6">Order Your Favorite Food</button>
            </div>
        </div>
        
    );
};

export default FeaturedMenu;