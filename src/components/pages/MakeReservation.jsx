import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postReservation } from '../../redux/reservationSlice';

const MakeReservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id } = useParams();
    const tourId = id;

    const reservationData = {
      start_end: startDate,
      end_date: endDate,
      tour_id: tourId,
      city,
    };

    console.log(reservationData);
    try {
      await dispatch(postReservation(reservationData));
    } catch (error) {}
    navigate('/reservations');
  };

  return (
    <div
      className="flex flex-col justify-center items-center"
      id="reservation-page"
    >
      <h1 className="text-4xl font-bold mb-4 text-gray-100">
        BOOK A TOUR-RIDE
      </h1>
      <p className="text-lg text-gray-200 mb-8 p-2">
        Please use the form below to book a test ride in your city.
      </p>
      <form
        onSubmit={handleSubmit}
        className="shadow-xl rounded-xl px-8 pt-6 pb-8 bg-gray-300 bg-opacity-80"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            required
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="start_date"
          >
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start_date"
            type="date"
            required
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="end_date"
          >
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="end_date"
            type="date"
            required
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-cyan-900 hover:bg-cyan-800 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book a Tour-Ride
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeReservation;
