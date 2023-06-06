import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import product from '../../Static/Dimensions.jpg';
import pdf from '../../Static/Dimensions.jpg';
import './ProductComponent.css';
// import {useParams} from 'react-router-dom';
import Layout from '../Layout/Layout';
import Recomendeditems from './RecomendedItems';

function createData(AvailableQuantity, LeadTimetoShip, Quantity, Price, Discount) {
  return { AvailableQuantity, LeadTimetoShip, Quantity, Price, Discount};
}

const rows = [
  createData(1, 'In-Stock', 99, 1000, 8),
  createData(31024, '1-2 Weeks', 1000, 9909, 10),
];

function createDataTable1(Quantity1, Quantity2, Price, Discount) {
  return { Quantity1, Quantity2, Price, Discount};
}

// s




function ProductComponent(props) {
  
  
  


  return (
  <Layout>
  
    <div className='container1'>
        <div className="left">
          <img  src={product}alt="product" className='pimg'/>
          <div className="sizes">
            <h3><span>CS</span>0.139 in (3.53 mm)</h3>
            <h3><span>ID</span>0.139 in (3.53 mm)</h3>
            <h3><span>OD</span>0.139 in (3.53 mm)</h3>
          </div>
          <div className="dataSheet">
            <img  src={pdf}  alt="pdf" />
            <a href="/"><Button variant="contained"><span>See Data Sheet</span></Button></a>
          </div>
          <div className="quantity">
          <Button variant="contained"><span>Quantity</span></Button>
          </div>
        </div>

        <div className="right">
          <h1><strong>
            {/* {props.itemData[getIndex(id)].ItemNo} */}
            CB-1345
            </strong></h1>
          
          <h2><span>
            {/* {props.itemData[getIndex(id)].Description} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, totam?
            </span></h2>
            <h3><strong>Color: Black</strong><span></span></h3>

        {/* <div className="table1">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Qty</strong></TableCell>
            <TableCell align="right"><strong>Price</strong></TableCell>
            <TableCell align="right"><strong>Discount</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTable1.map((row1) => (
            <TableRow
            key={row1.Quantity1}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span>{row1.Quantity1} - {row1.Quantity2}</span>
              </TableCell>
              <TableCell align="right"><span>
                {/* ${props.itemData[getIndex(id)].UnitPrice} */}
                {/* 20 */}
                {/* </span></TableCell>
              <TableCell align="right"><span>{row1.Discount}%</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div> */} 


          <div className="table">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Available Quantity</strong></TableCell>
            <TableCell align="right"><strong>Lead Time to Ship</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.AvailableQuantity}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                <span>{row.AvailableQuantity}</span>
              </TableCell>
              <TableCell align="right"><span>{row.LeadTimetoShip}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>

          <Button className='cartBtn'
  onClick={() => {
    alert('clicked');
  }}
  variant="contained"
>
  <span>Add to Cart</span>
</Button>
        </div>
    </div>
      <Recomendeditems/>
  </Layout>
  )
}

export default ProductComponent;