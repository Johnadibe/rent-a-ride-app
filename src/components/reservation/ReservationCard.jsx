const ReservationCard = ({ data }) => {
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

  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>

          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-bold">Tour: &nbsp;</span>
            <span className="text-gray-700">{data.tour.name}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-bold">City:</span>
            <span className="text-gray-700">{data.tour.city}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-bold">Start Date:</span>
            <span className="text-gray-700">
              {data.start_date}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-bold">End Date:</span>
            <span className="text-gray-700">{data.end_date}</span>
          </div>
        </div>
        <div className="flex justify-end">
          {cancelReservation(data.start_date)}
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
