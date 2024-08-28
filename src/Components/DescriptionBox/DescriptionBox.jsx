import React from "react";
import './DescriptionBox.css'

const DescrptionBox =() => {
    return(
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An E-commerce website dedicated to buying and selling clothes offers a convenient and accessible platform 
                    for users to explore a diverse range of fashion products. Users can browse through an extensive catalog 
                    of clothing items, including trendy apparel, footwear, and accessories, all from the comfort of their homes. 
                    The platform provides a seamless shopping experience, allowing customers to easily navigate, filter, and refine 
                    their searches to find the latest fashion trends or timeless classics.
                </p>
                <p>For sellers, the E-commerce platform serves as a dynamic marketplace to showcase and sell their clothing creations. 
                    They can reach a broad audience, attract potential customers, and manage transactions efficiently. 

                </p>
            </div>
        </div>
    )
}

export default DescrptionBox