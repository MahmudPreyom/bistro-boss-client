import React from "react";
import './Featured.css'
import featuredImg from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt reiciendis, mollitia omnis ex, molestiae unde libero, esse commodi nemo quaerat natus fugit? Autem sapiente neque a? Quae soluta molestias aliquam iure aspernatur sit facilis ex vel. Enim minus quod odit incidunt animi magni libero totam. Hic consequuntur magni culpa!</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;