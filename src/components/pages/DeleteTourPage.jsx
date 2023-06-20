import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours, deleteTour } from '../../redux/tours/tours';

const DeleteTourPage = () => {
  const tourList = useSelector((state) => state.tours);
  const { data } = tourList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteTour(id));
    }
  };

  return (
    <>
      <div className="w-[70%] m-auto">
        <h1
          className="
            text-3xl mb-4 text-center
            "
        >
          My Tour List
        </h1>
        <div className="flex flex-row flex-wrap gap-5 md:flex-nowrap md:gap-0 md:flex-col w-full mb-12">
          {data.map((info) => (
            <div
              key={info.id}
              className="flex md:flex-row md:w-full w-[310px]  flex-col items-center justify-between m-auto shadow-md rounded-lg mb-4 md:m-5 md:h-[150px] px-[10px]"
            >
              <div className="md:w-[30%] md:h-[150px] p-2">
                <img
                  src={`http://localhost:3000${info.image_url}`}
                  alt={info.name}
                  className="w-full h-full"
                />
              </div>
              <h2 className="mb-4 text-lg font-semibold text-slate-800">
                {info.name}
              </h2>

              <div className="flex flex-col justify-center mb-[1rem]">
                {/* {info.status && <span>Removed</span>} */}
                {info.removed && <span>Removed</span>}
                {/* {!info.status && ( */}
                {!info.removed && (
                <button
                  type="button"
                  className="bg-gray-100 text-[#313131] px-4 py-2 rounded-lg"
                  onClick={() => handleDelete(info.id)}
                >
                  Delete
                </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DeleteTourPage;
