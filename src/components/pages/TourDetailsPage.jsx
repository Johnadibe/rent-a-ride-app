/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import { SlSettings } from 'react-icons/sl';
import pic from '../../assets/canva.png';
import Loader from '../Loader/Loader';

const TourDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tourDetails = useSelector((state) => state.tours);
  const { loading, data } = tourDetails;
  const tourss = data?.find((t) => t.id === parseInt(id, 10));

  return (
    <>
      {loading && <Loader />}
      {tourss && (
        <div className="flex flex-col items-center md:justify-start justify-center w-full md:flex-row grow h-full lg:pt-20 lg:pb-10">
          <div className="grow  md:w-5/6 flex items-center justify-center md:px-10 rounded-full aspect-square">
            <img
              src={`http://localhost:3000${tourss?.image_url}`}
              alt={decodeURIComponent(tourss?.name)}
              className="object-cover block rounded-full m-4 aspect-square w-[100%] md:ml-[40%]"
            />
          </div>
          <div className="flex flex-col w-full items-start md:items-end  md:mr-10 py-10 px-10 lg:px-0 text-center">
            <div className="flex flex-col  items-center md:items-end">
              <h1 className="md:text-right mb-4 text-3xl font-semibold text-slate-800">
                {decodeURIComponent(tourss?.name)}
              </h1>
              <p className=" mb-10  md:text-right text-gray-500 text-sm">
                {decodeURIComponent(tourss?.des)}
              </p>
            </div>
            <div className="flex flex-col grow md:items-end ">
              <div className="grow flex flex-col rounded-2xl overflow-hidden border">
                <div className="flex justify-center items-center gap-4 border-b">
                  <h3 className="font-bold my-4">Other Details</h3>
                </div>
                <ul className="grow-0 p-4">
                  <li className="odd:bg-gray-200 bg-gray-100 py-2 px-4">
                    <div className="flex items-center justify-center">
                      <span className="pr-10">Price</span>
                      <span className="text-right">
                        $
                        {tourss?.price}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="flex items-center gap-2 mt-1">
                DISCOVER MORE MODELS
                {' '}
                <AiOutlineRight className="text-yellow-500" />
              </p>
              <img src={pic} alt="canva" />
              <div className="my-6 flex justify-center">
                <button
                  type="button"
                  className="bg-lime-500 text-white hover:bg-lime-400 px-6 py-2 rounded-full font-semibold min-w-[10rem] transition-colors border-2 border-transparent mb-4"
                >
                  <div className="flex items-center gap-3 justify-center">
                    <SlSettings />
                    <span>Reserve</span>
                    <BiRightArrow />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="fixed text-[1.8rem]
                            bottom-14 left-60 z-10 bg-[#98bd2a] text-white
                            rounded-full p-3 cursor-pointer
                            hidden md:block
                            "
        onClick={() => navigate(-1)}
      >
        <BiLeftArrow />
      </div>
    </>
  );
};

export default TourDetailsPage;
