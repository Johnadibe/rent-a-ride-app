import React from 'react';

const Home = () => {
    let data = [
        {
            name: "Tour 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sit.",
            price: 100,
            image: "https://picsum.photos/200/300"
        },
        {
            name: "Tour 2",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sed libero facilis fuga, delectus doloribus?",
            price: 200,
            image: "https://picsum.photos/200/300"
        },
        {
            name: "Tour 2",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sed libero facilis fuga, delectus doloribus?",
            price: 200,
            image: "https://picsum.photos/200/300"
        }
    ];

    return (
        <div className='Row'>
           {data.map((item, index) => {
                return (
                     <div key={index} className='card'>
                          <img src={item.image} alt={item.name} />
                          <h3>{item.name}</h3>
                          <p>Price: {item.price}$</p>
                          <p className='Des'> {item.description}</p>
                     </div>
                );
           })}
        </div>
    );
}

export default Home;
