import React from "react";

export default function Card() {
    return (
    <>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://th.bing.com/th/id/OIP.RNfltyD_gZq2KlyS-dZa0QHaEK?rs=1&pid=ImgDetMain" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Toggle Button
                    </h5>
                </a>
            </div>
        </div>
        </>
    );
}
