import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import CartMenu from '../../Shared/CartMenu/CartMenu';

const ChefRecommend = () => {
    const [menu] = useMenu()
    const chefRecommend = menu.filter(item => item.category === 'popular').slice(0, 3)
    return (
        <div className='mb-12'>
            <SectionTitle heading={"Chef Recommend"} subHeading={"Should Try"}></SectionTitle>
            <div className='grid md:grid-cols-3 gap-6 mx-6 md:mx-20'>
                {
                    chefRecommend.map(item => <CartMenu
                        key={item._id}
                        item={item}
                    ></CartMenu>)
                }
            </div>
        </div>
    );
};

export default ChefRecommend;