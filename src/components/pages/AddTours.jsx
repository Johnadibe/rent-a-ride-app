/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { getToken } from '../../util/auth';

let errorState;
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
    formData.append('name', name);
    formData.append('city', city);
    formData.append('price', price);
    formData.append('video', video);
    formData.append('image', image);
    formData.append('des', des);

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
    }
  };
  let alertContent;

  if (errorState === true) {
    alertContent = (
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>Tours were not added.</p>
      </div>
    );
  } else if (errorState === false) {
    alertContent = (
      <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
        <p>Great! You added a tour.</p>
      </div>
    );
  } else {
    alertContent = null;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      {alertContent}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <h3 className="text-3xl text-center font-bold mt-[35px]">Add Tours</h3>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-[95%] px-3 m-auto">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input value={name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Write tour name" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-[95%] px-3 m-auto">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input value={city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} placeholder="Write tour city name" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-[95%] px-3 m-auto">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input value={price} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} placeholder="Write tour Price" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-[95%] px-3 m-auto">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="video"
            >
              Video
            </label>
            <input value={video} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="video" id="video" onChange={(e) => setVideo(e.target.value)} placeholder="Add video of tour" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-[95%] px-3 m-auto">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="image"
            >
              Add Image
            </label>
            <input ref={fileInputRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-[95%] px-3 m-auto">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea value={des} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  resize-none focus:outline-none focus:bg-white" type="text" name="des" id="des" onChange={(e) => setDes(e.target.value)} placeholder="Write a description of tour" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0 m-auto md:">
            <button
              className="shadow bg-primary hover:bg-primary-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add Tour
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTours;
