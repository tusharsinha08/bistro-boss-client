import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import bgCover from '../../../assets/menu/banner3.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={bgCover}
                title={"Our Menu"}
                subTitle={"WOULD YOU LIKE TO TRY A DISH?"}
            ></Cover>
            <MenuCategory></MenuCategory>
        </div>
    );
};

export default Menu;