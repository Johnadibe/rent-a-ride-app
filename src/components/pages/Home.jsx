import React, { useState } from 'react';

const Home = () => {
    const data = [
        {
            id: 1,
            name: "Tour 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sit.",
            price: 100,
            image: "https://picsum.photos/200/300"
        },
        {
            id: 2,
            name: "Tour 2",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sed libero facilis fuga, delectus doloribus?",
            price: 200,
            image: "https://picsum.photos/200/300"
        },
        {
            id: 3,
            name: "Tour 3",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sed libero facilis fuga, delectus doloribus?",
            price: 200,
            image: "https://picsum.photos/200/300"
        },
        {
            id: 4,
            name: "Tour 4",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sed libero facilis fuga, delectus doloribus?",
            price: 200,
            image: "https://picsum.photos/200/300"
        },
        {
            id: 5,
            name: "Tour 5",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sed libero facilis fuga, delectus doloribus?",
            price: 200,
            image: "https://picsum.photos/200/300"
        },
        {
            id: 6,
            name: "Tour 6",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sed libero facilis fuga, delectus doloribus?",
            price: 200,
            image: "https://picsum.photos/200/300"
        }
    ];

    const cardsPerPage = 3; // Number of cards to display per page
    const totalPages = Math.ceil(data.length / cardsPerPage); 
    // Calculate the total number of pages
    console.log(totalPages);

    const [currentPage, setCurrentPage] = useState(1); // State to keep track of the current page

    // Calculate the start and end indexes of the cards to be displayed
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };
    
    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };
    
    return (
        <div className='Home'>
            <button type='button' onClick={handlePrev} disabled={currentPage === 1}
                className='button-next'><span>{`<`}</span></button>
            <div className='Row'>
                {data.slice(startIndex, endIndex).map((item) => (
                    <div key={item.id} id={item.id} className='card'>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}$</p>
                        <p className='Des'>{item.description}</p>
                    </div>
                ))}
            </div>
            {/* <div className='pagination'> */}
                {/* <button type='button' >
                    Prev
                </button>
                <button type='button' onClick={handleNext} >
                    Next
                </button> */}
                <button type='button' onClick={handleNext} disabled={currentPage === totalPages}
                    className='button-next'><span>{`>`}</span></button>
            {/* </div> */}
        </div>
    );
};

export default Home;
