import React from 'react';
import './Product.css';

// function Product(){
//     return(
// // <div id="Product">
//         // <h4 id="pname">Pepsi 250 ML</h4>
//         // <h4 id="price">20.00INR</h4>
//         // </div>

//         );
//     }


// function Product(data){
//     return(
//         <div id="Product">
//         <h4 id="pname">{data.pname}</h4>
//         <h4 id="price">{data.price}</h4>
//         </div>

//         );
// }

function Product(props){
    return(
        <div id="Product">
        <h4 id="pname">{props.pname}</h4>
        <h4 id="price">{props.price}</h4>
        </div>

        );
}

export default Product;