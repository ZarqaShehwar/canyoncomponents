import React from 'react'
import '../REquestQutoe/request.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Layout from '../Layout/Layout'
const RequestQuote = () => {
    return (
        <>
            <Layout>

                <div className='container '>
                    <div className="icon">
                        <AiOutlineCloseCircle size={35} />
                    </div>
                    <h1 className='head'>REQUEST A QUOTE</h1>
                    <p className='para'>
                        You should expect a quick response from us, but if you need an immediate response,
                        <strong>Call 832-501-0450</strong> to speak with one of our sales reps right away.
                        <strong>Note:</strong> If you call, please reference the <strong>Item #</strong> below for fast service.
                    </p>
                    <form action="" className='form' method="post">
                        <label htmlFor="item">Item</label>
                        <input type="text" name="" id="item" />

                        <div>
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="" id="Name" />
                            <label htmlFor="Lname">Last Name</label>
                            <input type="text" name="" id="Lname" />
                        </div>

                        <label htmlFor="Email">Email</label>
                        <input type="text" name="" id="Email" />
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" name="" id="Phone" />
                        <label htmlFor="Quantity">Quantity</label>
                        <input type="text" name="" id="Quantity" />
                        <label htmlFor="tprice">Target Price</label>
                        <input type="text" name="" id="tprice" />
                        <label htmlFor="comments">Comments</label>
                        <textarea name="" id="comments" cols="30" rows="10" />

                        <button type="submit" className='subbtn'>Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default RequestQuote