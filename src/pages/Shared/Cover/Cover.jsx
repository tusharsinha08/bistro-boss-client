import React from 'react';

const Cover = ({ img, title, subTitle }) => {
    return (
        <div
            className="hero mb-12 h-[650px]"
            style={{
                backgroundImage:
                    `url("${img}")`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center p-12 bg-black bg-opacity-50 mx-4 md:w-3/4">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;