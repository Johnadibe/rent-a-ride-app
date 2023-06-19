/* eslint-disable no-alert */
import React, { useState, useRef } from 'react';
import { getToken } from '../../util/auth';

let errorState = false;
const AddTours = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState(0);
  const [video, setVideo] = useState('');
  const [image, setImage] = useState(null);
  const [des, setDes] = useState('');
  const fileInputRef = useRef(null);

  const handleReset = () => {
    fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', encodeURIComponent(name));
    formData.append('city', encodeURIComponent(city));
    formData.append('price', encodeURIComponent(price));
    formData.append('video', encodeURIComponent(video));
    formData.append('image', image);
    formData.append('des', encodeURIComponent(des));

    const response = await fetch(`${process.env.REACT_APP_API_URL}/tours`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    });
    const data = await response.json();
    if (data.error) {
      errorState = true;
    } else {
      errorState = false;
      setName('');
      setCity('');
      setPrice(0);
      setVideo('');
      setDes('');
      handleReset();
      console.log(errorState);
    }
  };
  return (
    <div className="w-full h-screen ">
      {errorState ? (
        <div role="alert">
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Tours is not added</p>
          </div>
        </div>
      ) : (
        <div role="alert">
          <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
            <p>Great you add a tour.</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col justify-evenly items-center w-full h-72">
        <h3 className="text-3xl text-center font-bold">Add Tours</h3>
        <div className="flex flex-col justify-between h-3/6">
          <div className="m-1 p-1 rounded-full max-w-sm bg-gradient-to-r from-gray-400 via-white to-gray-500">
            <input value={name} className="p-3 w-full rounded-xl focus:outline-none" type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Write tour name" required />
          </div>
          <div className="m-1 p-1 rounded-full max-w-sm bg-gradient-to-r from-gray-400 via-white to-gray-500">
            <input value={city} className="p-2 w-full rounded-xl focus:outline-none" type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} placeholder="Write tour city name" required />
          </div>
          <div className="m-1 p-1 rounded-full max-w-sm bg-gradient-to-r from-gray-400 via-white to-gray-500">
            <input value={price} className="p-2 w-full rounded-xl focus:outline-none" type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} placeholder="Write tour Price" required />
          </div>
          <div className="m-1 p-1 rounded-full max-w-sm bg-gradient-to-r from-gray-400 via-white to-gray-500">
            <input value={video} className="p-2 w-full rounded-xl focus:outline-none" type="text" name="video" id="video" onChange={(e) => setVideo(e.target.value)} placeholder="Add video of tour" required />
          </div>
          <div className="mt-2 mb-2">
            <h4 className="font-semibold">Add Image</h4>
            <input ref={fileInputRef} type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
          <div className="m-1 p-1 rounded-full max-w-sm bg-gradient-to-r from-gray-400 via-white to-gray-500">
            <input value={des} className="p-2 w-full rounded-xl focus:outline-none" type="text" name="des" id="des" onChange={(e) => setDes(e.target.value)} placeholder="Write a description of tour" required />
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="w-52 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit Tour</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTours;
