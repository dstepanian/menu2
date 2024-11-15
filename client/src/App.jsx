import React from "react";
import MenuCard from "./components/MenuCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contacts from "./components/Contacts.jsx";
import Menu from "./components/Menu.jsx";

function App() {
    const menuItems = [
        {
            id: 1,
            name: "Burger",
            description: "Tasty burger with cheese and lettuce",
            price: "$10.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSkKP8LgqK1IPs87-PyJcveeRF0Wet-xgyw&s"
        },
        {
            id: 2,
            name: "Pizza",
            description: "Delicious pizza with tomato sauce and cheese",
            price: 12.99,
            image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
        },
        {
            id: 3,
            name: "Sushi",
            description: "Fresh sushi with seaweed and rice",
            price: 15.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzL8Raj238e9hcvEip9o43pXASbzmAIMD52g&s"
        },
        {
            id: 4,
            name: "Khash",
            descrscription: "Tasty burger with cheese and lettuce",
            price: "$10.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSkKP8LgqK1IPs87-PyJcveeRF0Wet-xgyw&s"
        },
        {
            id: 5,
            name: "Pizza",
            description: "Delicious pizza with tomato sauce and cheese",
            price: 12.99,
            image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067"
        },
        {
            id: 6,
            name: "Sushi",
            description: "Fresh sushi with seaweed and rice",
            price: 15.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzL8Raj238e9hcvEip9o43pXASbzmAIMD52g&s"
        },
        {
            id: 7,
            name: "Khash",
            description: "Tasty khash with cheese and lettuce",
            price: 20.99,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs96zdM-AoXmKjybJkfcjnIv0H8M9wwMS9ng&s"
        },
    ];

    return (
        <>
            <div>
                <Header/>
                <Menu/>

            </div>
            <div className="flex flex-wrap justify-center">
                {menuItems.map((menuItem) => (
                    <MenuCard key={menuItem.id} dish={menuItem}/>
                ))}
            </div>
            <div>
                <Contacts/>
                <Footer/>

            </div>

        </>

    );
}

export default App;

