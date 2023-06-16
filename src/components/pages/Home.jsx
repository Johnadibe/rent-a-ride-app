// eslint-disable-next-line import/no-extraneous-dependencies
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
// import { useRef } from 'react';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTours } from '../../redux/tours/tours';

// eslint-disable-next-line consistent-return
const Home = () => {
  const tourS = useSelector((state) => state.tours);
  const dispatch = useDispatch();
  const { loading, data } = tourS;

  useEffect(() => {
    if (!loading) {
      return;
    }
    dispatch(fetchTours());
  }, []);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(data.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    );
  }
  return (
    <section className="h-screen flex flex-col justify-evenly items-center  bg-gray-200">
      <div className="flex flex-col align-middle">
        <h2 className="text-2xl font-extrabold">LATEST PLACE</h2>
        <h5 className="text-xl text-bGrey">Please Select where you want to visit</h5>
      </div>
      <div className="Home w-full">
        {currentPage > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="button-pre py-2 px-4 bg-gradient-to-br from-bGreen to-stone-800
                            hover:bg-green-600 text-white font-bold"
          >
            <span><BiLeftArrow /></span>
          </button>
        )}
        <div className="Row">
          {data.slice(startIndex, endIndex).map((item) => (
            <div key={item.id} id={item.id} className="card-main hover:w-72 hover:h-72">
              <a href="/">
                <img src={item.image} alt={item.name} />
                <div className="leading-4">
                  <h3 className="font-bold text-2xl space-y-1">{item.name}</h3>
                  <p className=" text-base">
                    Price:
                    {item.price}
                    $
                  </p>
                  <p className="Des text-xs text-bGrey">{item.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        {currentPage < totalPages && (
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="hover:bg-green-600 font-bold py-2 px-4 text-bGrey bg-gradient-to-br from-green-400 to-slate-600 button-next"
          >
            <span className="text-xl"><BiRightArrow /></span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Home;
