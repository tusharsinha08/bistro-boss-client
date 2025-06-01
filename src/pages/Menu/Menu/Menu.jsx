import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import bgCover from '../../../assets/menu/banner3.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import useHelmet from '../../../hooks/useHelmet';

const Menu = () => {
    const helmet = useHelmet('Menu')
    return (
        <div>
            {helmet}
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