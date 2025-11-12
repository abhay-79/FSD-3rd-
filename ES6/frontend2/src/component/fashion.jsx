// import React from 'react'
// import './fashion.css'

// function fashion(props) {
//   return (
//     <div>
//       <div>
//         <h1>FASHION SHOW</h1>
//       </div>
//       <div id="card">
//         <img src="https://th.bing.com/th/id/OIP.TNqiIuWX3e_8T20Nz4h3VgHaLH?w=204&h=306&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1" alt="" height={80} width={80}></img>
//         <h4>Title{props.title}</h4>
//         <h4>Price:{props.price}</h4>
        
//       </div>
//     </div>
//   )
// }

// export default fashion

import React from 'react';
import './fashion.css';

function Fashion(props) {
  return (
    <div id="card">
      <img
        src={props.image}
        alt={props.title}
        height={100}
        width={100}
      />
      <h4>Title: {props.title}</h4>
      <h4>Price: ${props.price}</h4>
    </div>
  );
}

export default Fashion;

