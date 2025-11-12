// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import './app.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App(){
//     return(
//         <>
//         <div>
//             <container>
//                 <Row>
//                     <Col>1 of 2</Col>
//                     <Col>2 of 2</Col>

//                 </Row>
//                 <Row>
//                     <Col>1 of 3</Col>
//                     <Col>2 of 3</Col>
//                     <Col>3 of 3</Col>
//                 </Row>
//             </container>
//             </div>
//             </>
//     )
// }
// export default App;


// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [counter, setCounter] = useState(0)

//   const addValue = () => {
//     if (counter < 20) setCounter(counter + 1)
//   }

//   const removeValue = () => {
//     if (counter > 0) setCounter(counter - 1)
//   }

//   return (
//     <>
//       <h1>College React</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button onClick={addValue}>Add Value</button><br />
//       <button onClick={removeValue}>Remove Value</button>
//     </>
//   )
// }

// export default App
// import React from 'react'
// import Book from "./Book";



// function App() {
//   return (
//     <div>
//       <Book />
//       <Book />
//       <Book />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Book from './Book.jsx'
// import Navbar from './navbar.jsx'
// import './App.css'
// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <h1>My Book Collection</h1>
//       <div id='abc'>
        
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//       </div>
//     </div>
//   )
// }

// export default App


// import React,{useEffect, useState} from 'react'; 
// import Fashion from './component/fashion.jsx';

// function App() {
//   const [book,setBooks]=useState([]);
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(data=>{
//       setBooks(data);
//     })
//   },[])
//   return (
//     <div>
//      {
//       book.map((f,i)=>{
//         <book key={i} props={f} />;
        
//       })
//      }
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';
import Fashion from './component/fashion.jsx'; // ✅ Ensure correct file name & path

function App() {
  const [fa1, setFa1] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setFa1(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Fashion Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {fa1.map((f, i) => (
          <Fashion key={i} title={f.title} price={f.price} />
        ))}
      </div>
    </div>
  );
}

export default App;

