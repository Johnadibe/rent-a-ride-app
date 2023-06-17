import React, { useState } from 'react';
import FormData from 'form-data';
import { useDispatch} from 'react-redux';
import { postTours } from '../../redux/tours/toursPost';
import { getToken } from '../../util/auth';

const AddTours = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [video, setVideo] = useState('');
  const [image, setImage] = useState(null);

  const [description, setDescriptiion] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('city', city);
    formData.append('price', price);
    formData.append('video', video);
    formData.append('image', image);
    formData.append('des', description);
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    // console.log(getToken)
    if(getToken !== null){
      dispatch(postTours(formData.entries));
      console.log(getToken);
    } else {
      alert("You are not sigin")
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Write tour name" required />
      <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} placeholder="Write tour city name" required />
      <input type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} placeholder="Write tour Price" required />
      <input type="text" name="video" id="video" onChange={(e) => setVideo(e.target.value)} placeholder="Add video of tour" required />
      <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} placeholder="Add image of tour" required />
      <input type="text" name="des" id="des" onChange={(e) => setDescriptiion(e.target.value)} placeholder="Write a description of tour" required />
      <button type="submit">Submit Tour</button>
    </form>
  );
};

export default AddTours;
