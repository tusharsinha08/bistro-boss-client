import React from 'react';

const CartMenu = ({ img, name, recipe }) => {
    return (
        <div>
            <div className="card bg-gray-100 shadow-sm rounded-xl">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className='card-actions justify-center'>
                        <button className="btn btn-neutral btn-outline text-yellow-500 border-yellow-500 hover:border-none border-0 border-b-4 mt-4 rounded-xl  uppercase text-xl">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartMenu;