import React from 'react';
// import Sheader from "./ShopHeader";
import Sleft from "./ShopLeft"
// import Sright from "./ShopRight";
// import Layout from "./../Layout";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Filter from "./Filter";
const Shope = () => {

  return (

    <>

      <div className="row">
        <div className="col-md-3 mb-4 d-none d-md-block" >
          <Sleft />
        </div>
        <div className="col-md-9">
          {/* <Sright /> */}
        </div>
      </div>
    </>


  )
}

export default Shope