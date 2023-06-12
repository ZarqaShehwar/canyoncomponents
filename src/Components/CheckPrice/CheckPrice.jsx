import React from 'react'
import '../CheckPrice/Checkprice.css'
import { AiFillInfoCircle } from 'react-icons/ai';
const CheckPrice = () => {
    return (
        <div>
            <h2>Enter a quantity to Check Price</h2>
            <div className="contain">
                <div className='flex'>
                    <input type="number" className='qnty' />
                    <button className='btnqty'>CHECK PRICE</button>
                </div>
                <div className="bord">


                    <div className="table">
                        <hr />
                        <table cellSpacing={10} >

                            <tr>
                                <th >
                                    Quantity
                                </th>
                                <th >
                                    Estimated Ship time
                                </th>
                                <th >
                                    Unit Cost
                                </th>
                                <th >
                                    Total
                                </th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>
                                        35
                                    </td>
                                    <td>
                                        Today or Tomarrow
                                    </td>
                                    <td>
                                        $6.025
                                    </td>
                                    <td>
                                        $30.45
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <button className='addtocart'>Add to Cart</button>
                        <div className="flex" style={{marginTop:'2rem'}}>
                            <AiFillInfoCircle size={20} />
                            <p style={{fontSize:'1.1rem'}} >Try increasing your qunatity for better value.</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default CheckPrice