import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from 'redux/reservation/reservationsSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const { data } = reservations;

  const cancelReservation = (start) => {
    const today = new Date();
    const startDate = new Date(start);
    return (today < startDate) ? (
      <button
        type="button"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-full mt-2"
        onClick={() => null}
      >
        Cancel Reservation
      </button>
    ) : '';
  };

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return (
    <div className="flex justify-center flex-col items-center p-4">
      <h2 className="sm:text-3xl text-2xl font-bold mb-6 pt-4">
        My Reservations
        {' '}
      </h2>
      <div className="flex flex-wrap flex-col sm:flex-row gap-4 justify-center items-center w-full">
        {data.length > 0
          ? (
            data.map((reservation) => (
              <div
                className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden"
                key={reservation.id}
              >
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>

                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-bold">Tour: &nbsp;</span>
                      <span className="text-gray-700">{reservation.tour.name}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-bold">City:</span>
                      <span className="text-gray-700">{reservation.tour.city}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-bold">Start Date:</span>
                      <span className="text-gray-700">
                        {reservation.start_date}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-bold">End Date:</span>
                      <span className="text-gray-700">{reservation.end_date}</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    {cancelReservation(reservation.start_date)}
                  </div>
                </div>
              </div>
            ))
          )
          : (
            <p className="text-lg font-bold text-gray-800 text-center">
              You have no reservations yet.
            </p>
          )}
      </div>
    </div>
  );
};

export default Reservations;
