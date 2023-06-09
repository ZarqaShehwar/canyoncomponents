import React, { useContext, useState } from 'react';
import "./css/shopleft.css"
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import CheckboxList from './CheckboxeList';
import  dimensions  from "../../Static/Dimensions.jpg";
import SliderComponent from './SliderComponent';
import CartPopup from '../CartPopup/CartPopup';
import { UserContext } from '../../UserContext';
// import { Link } from 'react-router-dom';


const ShopLeft = () => {
  const {isCartopen,setisCartopen}=useContext(UserContext);
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = ["USA", "Canada", "Mexico", "Brazil", "Japan"];
  const [size, setsize] = useState(0);
  const [cs, setCs] = useState(0);
  const [id, setid] = useState(0)
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
      <div className='flex'>

        <h2>KEYWORD</h2>
        <div className='hr' ></div>
      </div>
      <div className='keywoedSearch'>
        <div>
          <input type="text" placeholder='Search' className='searchinput' />
        </div>
       
        
        <button  className='search'onClick={()=>{setisCartopen(true)}}>Search</button>
       
      </div>
      {
        isCartopen&&<CartPopup/>
      }
      <div className="flex">


        <h2>
          DIMENSIONS(mm)
        </h2>
        <div className='hr' ></div>
       
        

      </div>
      <img src={dimensions} alt="StandardImage" width={250}/>
      <div className="flex">

      <h2>STANDARD SIZE</h2>
      <div className='hr' ></div>
      </div>
      <p>Standard Size:</p>
      
     <div className='p1'>
     <select value={selectedCountry}className='country' onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
     </div>
      <div className="row">
        <AiFillCaretDown />
        <input type="text" className='sizeinput' placeholder='Size' value={size} />
        <div className='updown'>
          <AiFillCaretUp onClick={()=>{setsize(size+1)}} />
          <AiFillCaretDown onClick={()=>{setsize(size===0?0:size-1)}} />

        </div>
        <input type="text" className='sizeinput' placeholder='CS' value={cs}/>
        <div className='updown'>
          <AiFillCaretUp onClick={()=>{setCs(cs+1)}} />
          <AiFillCaretDown  onClick={()=>{setCs(cs===0?0:cs-1)}}/>

        </div>
        <input type="text" className='sizeinput' placeholder='ID' value={id}/>
        <div className='updown'>
          <AiFillCaretUp  onClick={()=>{setid(id+1)}}/>
          <AiFillCaretDown  onClick={()=>{setid(id===0?0:id-1)}} />

        </div>
      </div>
      <div className="flex">
      <h2>TEMPRATURE &deg; C</h2>
      <div className='hr' ></div>
      </div>
      <SliderComponent />
      <div className="flex">
      <h2>BASE MATERIAL TYPE</h2>
      <div className='hr' ></div>
      </div>
      <CheckboxList data={data} />
      <div className="flex">
      <h2>Sub MATERIAL TYPE</h2>
      <div className='hr' ></div>
      </div>
      <CheckboxList data={data} />
          <div className="flex">
      <h2>Compliance</h2>
      <div className='hr' ></div>
            </div>            
      <CheckboxList data={data} />
          <div className="flex">
      <h2>Hardness</h2>
      <div className='hr' ></div>
          </div>
            
      <CheckboxList data={data} />
          <div className="flex">
      <h2>Color</h2>
      <div className='hr' ></div>
          </div>
            
      <CheckboxList data={data} />


    </div>
  )
}

export default ShopLeft