import React, { useState } from 'react';
import "./css/shopleft.css"
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import CheckboxList from './CheckboxeList';



const ShopLeft = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = ["USA", "Canada", "Mexico", "Brazil", "Japan"];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  return (
    <div className="main ">

      <h2>KEYWORD</h2>
      <form className='keywoedSearch' action="">
        <div>
          <input type="text" placeholder='Search' />
        </div>
        <button type="submit">Search</button>
      </form>
      <h2>
        DIMENSIONS
      </h2>
      <img src="" alt="StandardImage" />
      <h2>STANDARD SIZE</h2>
      <p>Standard Size:</p>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div className="row">
        <AiFillCaretDown />
        <input type="text" className='sizeinput' placeholder='Size' />
        <div className='updown'>
          <AiFillCaretUp />
          <AiFillCaretDown />

        </div>
        <input type="text" className='sizeinput' placeholder='CS' />
        <div className='updown'>
          <AiFillCaretUp />
          <AiFillCaretDown />

        </div>
        <input type="text" className='sizeinput' placeholder='ID' />
        <div className='updown'>
          <AiFillCaretUp />
          <AiFillCaretDown />

        </div>
      </div>
      <h2>TEMPRATURE &deg; C</h2>
      {/* <SliderComponent /> */}
      <h2>BASE MATERIAL TYPE</h2>
      <CheckboxList data={data} />


    </div>
  )
}

export default ShopLeft