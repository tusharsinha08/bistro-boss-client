import React, { useState } from 'react';
import shopCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import CartMenu from '../../Shared/CartMenu/CartMenu';
import FoodTab from '../FoodTab/FoodTab';
import { useParams } from 'react-router-dom';
import useHelmet from '../../../hooks/useHelmet';

const OurShop = () => {
    const helmet = useHelmet("Shop")

    const categoryList = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categoryList.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            {helmet}
            <Cover
                img={shopCover}
                title={"Our Shop"}
                subTitle={"Browse our menu and place your order — fresh flavors delivered with love and speed."}
            ></Cover>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex flex-wrap justify-center md:gap-4 mb-6 uppercase">
                            <Tab selectedClassName='text-yellow-500 font-bold'>salad</Tab>
                            <Tab selectedClassName='text-yellow-500 font-bold'>pizza</Tab>
                            <Tab selectedClassName='text-yellow-500 font-bold'>soup</Tab>
                            <Tab selectedClassName='text-yellow-500 font-bold'>dessert</Tab>
                            <Tab selectedClassName='text-yellow-500 font-bold'>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <FoodTab items={salads}></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={pizzas}></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={soups}></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={desserts}></FoodTab>
                    </TabPanel>
                    <TabPanel>
                        <FoodTab items={drinks}></FoodTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;