import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import FeaturedMenu from '../FeaturedMenu/FeaturedMenu';
import bgDessert from '../../../assets/menu/dessert-bg.jpeg'
import bgPizza from '../../../assets/menu/pizza-bg.jpg'
import bgSalad from '../../../assets/menu/salad-bg.jpg'
import bgSoup from '../../../assets/menu/soup-bg.jpg'
import { Link } from 'react-router-dom';

const MenuCategory = () => {
    const [menu] = useMenu()
    const offeredItem = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <section className='mb-12'>
            <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"}></SectionTitle>

            <div className='grid md:grid-cols-2 gap-4 mx-6 md:mx-20'>
                {
                    offeredItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mb-12'>
                <Link to="/shop">
                    <button className="btn btn-neutral btn-outline text-black border-0 border-b-4 mt-4 rounded-xl hover:text-white uppercase text-xl p-6">Order Your Favorite Food</button>
                </Link>
            </div>
            <FeaturedMenu
                img={bgDessert}
                title={"dessert"}
                subTitle={"Indulge in heavenly desserts crafted with love, passion, and the finest ingredients."}
                item={desserts}
            ></FeaturedMenu>
            <FeaturedMenu
                img={bgPizza}
                title={"pizza"}
                subTitle={"Savor every slice of our handcrafted pizzas, baked to perfection with fresh toppings."}
                item={pizzas}
            ></FeaturedMenu>
            <FeaturedMenu
                img={bgSalad}
                title={"salad"}
                subTitle={"Fresh, crisp, and bursting with flavor — our salads are a celebration of health and taste."}
                item={desserts}
            ></FeaturedMenu>
            <FeaturedMenu
                img={bgSoup}
                title={"soup"}
                subTitle={"Warm your soul with our comforting, slow-simmered soups made from the freshest ingredients."}
                item={soups}
            ></FeaturedMenu>
        </section>
    );
};

export default MenuCategory;