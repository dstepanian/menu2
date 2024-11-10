import React, { useState } from 'react';

export default function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [newItem, setNewItem] = useState({
        name: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name && newItem.price) {
            setMenuItems((prevItems) => [
                ...prevItems,
                { name: newItem.name, price: parseFloat(newItem.price) },
            ]);
            setNewItem({ name: '', price: '' }); // Clear form after submitting
        }
    };

    return (
        <div className="container p-4">
            <h1 className="text-2xl font-bold mb-4">Restaurant Menu</h1>

            {/* Form to add new menu item */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Menu Item Name"
                        value={newItem.name}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newItem.price}
                        onChange={handleChange}
                        className="border p-2 rounded"
                        required
                        min="0.01"
                        step="0.01"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white p-2 rounded"
                    >
                        Add Item
                    </button>
                </div>
            </form>

            {/* Display the list of menu items as cards */}
            <div className="menu-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {menuItems.map((item, index) => (
                    <div key={index} className="card bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-lg text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
