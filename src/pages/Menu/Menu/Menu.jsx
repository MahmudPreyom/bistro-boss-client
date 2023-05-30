import React from "react";
import { Helmet } from 'react-helmet-async';
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg"

const Menu = () => {
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            
            
        </div>
    );
};

export default Menu;