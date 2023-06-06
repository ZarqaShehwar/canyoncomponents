import React from 'react'
import '../REquestQutoe/request.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate  } from "react-router-dom";
import Layout from '../Layout/Layout'
const RequestQuote = () => {
    const  navigate = useNavigate();
const handlecancel=()=>{
    navigate(-1);
}
    return (
        <>
            <Layout>

                <div className='container '>
                    <div className="icon">
                        <AiOutlineCloseCircle size={35} onClick={handlecancel} />
                    </div>
                    <h1 className='head'>REQUEST A QUOTE</h1>
                    <p className='para'>
                        You should expect a quick response from us, but if you need an immediate response,
                        <strong>Call 832-501-0450</strong> to speak with one of our sales reps right away.
                        <strong>Note:</strong> If you call, please reference the <strong>Item #</strong> below for fast service.
                    </p>
                    <form action="" className='form' method="post">
                        <label htmlFor="item"><strong>Item</strong></label>
                        <input type="text" name="" id="item" />
                    <div className='flex'>
                        
                        <div className='space-betw'>
                            <label htmlFor="Name"><strong>Name</strong></label>
                            <input type="text" name="" id="Name" />
                            
                        </div>
                        <div className='space-betw'>
                            
                        <label htmlFor="Lname"><strong>Last Name</strong></label>
                            <input type="text" name="" id="Lname" />
                        </div>
                    
                    </div>

                        <label htmlFor="Email"><strong>Email</strong></label>
                        <input type="text" name="" id="Email" />
                        <label htmlFor="Phone"><strong>Phone</strong></label>
                        <input type="text" name="" id="Phone" />
                        <label htmlFor="Quantity"><strong>Quantity</strong></label>
                        <input type="text" name="" id="Quantity" />
                        <label htmlFor="tprice"><strong>Target Price</strong></label>
                        <input type="text" name="" id="tprice" />
                        <label htmlFor="comments"><strong>Comments</strong></label>
                        <textarea name="" id="comments" cols="30" rows="10" />

                        <button type="submit" className='subbtn'>Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default RequestQuote