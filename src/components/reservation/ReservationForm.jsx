// ReservationForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from 'util/auth';


const ReservationForm = ({ tour_id }) => {
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');
  const dispatch = useDispatch();
  const username = getUser ? getUser.name : "NULL"

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      startDate,
      endDate,
      tour_id,
    };

    dispatch(createReservation(reservation));

    setstartDate('');
    setendDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id='name'
        placeholder="Name"
        value={username}
        className="form_input"
        readOnly
      />
       <input
        type="text"
        placeholder="Start Date"
        value={startDate}
        className="form_input"
        onChange={(e) => startDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Date"
        value={date}
        onChange={(e) => setendDate(e.target.value)}
      />
      <button className="outline_btn" type="submit">Create Reservation</button>
    </form>
  );
};

export default ReservationForm;