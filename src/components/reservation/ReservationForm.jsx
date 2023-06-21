// ReservationForm.js
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from 'redux/reservation/reservationsSlice';
import { getUser } from 'util/auth';
import { fetchTours } from 'redux/tours/tours';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ReservationForm = ({ tourId = null }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { data } = useSelector((state) => state.tours);
  const error = useSelector((state) => state.reservations);
  const tours = data;
  const [selectedOption, setSelectedOption] = useState(tourId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(error);
  const username = getUser ? getUser.name : 'NULL';
  const email = getUser ? getUser.email : 'NULL';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservation = {
      start_date: startDate,
      end_date: endDate,
      tour_id: selectedOption,
    };

    if (!startDate || !endDate) {
      setErrorMsg('Start and end date are required');
    } else {
      dispatch(createReservation({ reservation, navigate, toast }));
    }

    // setStartDate('');
    // setEndDate('');
    // setSelectedOption('');
    // setErrorMsg("")
  };

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="auth_form">
      <h4 className="text-lg mb-4 font-bold text-center">
        User:
        {' '}
        <span className="text-white">
          {username}
          {' | '}
          {email}
        </span>
      </h4>

      {errorMsg && <div className="bg-red-300 p-4">{errorMsg}</div>}

      <div className="mb-3">
        <label className="w-full text-white font-semibold" htmlFor="name">Username:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={username}
          className="reservation_input"
          readOnly
        />
      </div>

      <div className="mb-3">

        <label className="w-full text-white font-semibold " htmlFor="mySelect">Tour:</label>
        <select id="mySelect" className="reservation_input" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          {
                tours.map((data) => (
                  <option
                    key={data.id}
                    value={data.id}
                  >
                    {data.name}
                  </option>
                ))
            }
        </select>
      </div>

      <div className="mb-3">
        <label className="w-full text-white font-semibold" htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          placeholder="Start Date"
          value={startDate}
          className="reservation_input"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="w-full text-white font-semibold" htmlFor="end-date">End Date:</label>
        <input
          id="end-date"
          type="date"
          placeholder="End Date"
          className="reservation_input"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button className="white_btn" type="submit">Book Now</button>
    </form>
  );
};

ReservationForm.propTypes = {
  tourId: PropTypes.string.isRequired,
};

export default ReservationForm;
