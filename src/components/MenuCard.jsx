import React from "react";

function MenuCard({ dish }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-72 m-4 transform transition duration-300 hover:scale-105">
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover mb-4" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-gray-600 text-xs">{dish.description}</p>
                <p className="text-gray-600">{dish.price}</p>
            </div>
        </div>
    );
}

export default MenuCard;