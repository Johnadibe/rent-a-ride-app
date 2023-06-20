// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../../redux/tours/tours';
import { getUser } from '../../util/auth';
import Log from '../Lognin/out/log';

// eslint-disable-next-line consistent-return
const Home = () => {
  // window.location.reload();
  const dispatch = useDispatch();
  const tourS = useSelector((state) => state.tours);
  const { data } = tourS;
  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

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
  const sliceParagraph = (paragraph, limit) => {
    const words = paragraph.split(' ');
    const slicedWords = words.slice(0, limit);
    const slicedParagraph = slicedWords.join(' ');
    return slicedParagraph;
  };
  return (
    <section className="lg:h-screen flex flex-col bg-gray-200">
      <div className="w-full h-16 bg-gray-100 flex justify-between items-center">
        {getUser === null ? <h4 className="ml-12 font-bold text-lg">Welcome</h4>
          : <h4 className="ml-12 font-bold text-lg">{getUser.name}</h4>}
        <Log />
      </div>
      <div className="flex flex-col justify-evenly lg:h-4/5">
        <div className="flex flex-col align-middle text-center">
          <h2 className="text-2xl font-extrabold">LATEST PLACE</h2>
          <h5 className="text-base md:text-xl text-bGrey">Please Select where you want to visit</h5>
        </div>
        <div className=" w-full flex items-center justify-between flex-col md:flex-row">
          {currentPage > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="button-pre py-2 px-4 bg-lime-500 text-white hover:bg-lime-400 font-bold hidden md:block"
            >
              <span><BiLeftArrow /></span>
            </button>
          )}
          <div className="flex items-center justify-evenly w-full md:flex-row flex-col">
            {data.length === 0 ? <h3>There is no tour kindly add</h3>
              : data.slice(startIndex, endIndex).map((item) => (
                <div key={item.id} id={item.id} className="card-main hover:w-72 hover:h-72">
                  <NavLink to={`/tour/${item.id}`}>
                    <img src={`http://localhost:3000${item.image_url}`} alt={item.name} />
                    <div className="leading-4">
                      <h3 className="font-bold text-2xl space-y-1">{decodeURIComponent(item.name)}</h3>
                      <p className="text-base text-center font-[18px]">
                        Price:
                        {' '}
                        $
                        {item.price}
                      </p>
                      <p className="Des text-sm md:text-lg text-gray-500">{sliceParagraph(decodeURIComponent(item.des), 10)}</p>
                    </div>
                  </NavLink>
                </div>
              ))}

          </div>
          {currentPage < totalPages && (
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="bg-lime-500 text-white hover:bg-lime-400 font-bold py-2 px-4 button-next hidden md:block"
            >
              <span className="text-xl"><BiRightArrow /></span>
            </button>
          )}
        </div>
        <div className="flex flex-row-reverse md:hidden">
          {currentPage > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="font-bold text-green-500 hover:text-green-400"
            >
              <span>Prev</span>
            </button>
          )}
          {currentPage < totalPages && (
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="font-bold text-blue-700 hover:text-green-600"
            >
              <span className="">Next</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
