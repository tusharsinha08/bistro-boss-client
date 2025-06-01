import React from 'react';

const CartMenu = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div>
            <div className="card bg-gray-100 shadow-sm rounded-xl h-full shadow-yellow-700">
                <figure>
                    <div className='relative'>
                        <p className='absolute bg-black text-white p-2 rounded-md top-2 right-2'>${price}</p>
                        <img
                            src={image}
                            alt="Shoes" />
                    </div>
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