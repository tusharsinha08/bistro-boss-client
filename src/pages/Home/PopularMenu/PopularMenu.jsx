import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(item => item.category === 'popular')
    
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 mx-4 md:mx-20'>
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-neutral btn-outline text-black border-0 border-b-4 mt-4 rounded-xl hover:text-white uppercase text-xl p-6">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;