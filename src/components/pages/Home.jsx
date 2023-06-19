// eslint-disable-next-line import/no-extraneous-dependencies
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from '../../redux/tours/tours';
import { getUser } from '../../util/auth';
import Log from '../Lognin/out/log';

// eslint-disable-next-line consistent-return
// let render = true;
const Home = () => {
  const dispatch = useDispatch();
  const tourS = useSelector((state) => state.tours);
  const { data } = tourS;
  useEffect(() => {
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

  // if (render) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="loader" />
  //     </div>
  //   );
  // }
  return (
    <section className="h-screen flex flex-col bg-gray-200">
      <div className="w-full h-16 bg-gray-100 flex justify-between items-center">
        {getUser === null ? <h4 className="ml-12 font-bold text-lg">Welcome</h4>
          : <h4 className="ml-12 font-bold text-lg">{getUser.name}</h4>}
        <Log />
      </div>
      <div className="flex flex-col justify-evenly h-4/5">
        <div className="flex flex-col align-middle text-center">
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
            {data.length === 0 ? <h3>There is no tour kindly add</h3>
              : data.slice(startIndex, endIndex).map((item) => (
                <div key={item.id} id={item.id} className="card-main hover:w-72 hover:h-72">
                  <a href="/">
                    <img src={`http://localhost:3000${item.image_url}`} alt={item.name} />
                    <div className="leading-4">
                      <h3 className="font-bold text-2xl space-y-1">{item.name}</h3>
                      <p className="text-base">
                        Price:
                        {' '}
                        {item.price}
                        {' '}
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
      </div>
    </section>
  );
};

export default Home;
