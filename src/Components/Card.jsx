import React from "react";

function Card(props) {
  return (
    <div className='Cards' style={{ cursor: "pointer" }}>
      <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />
      <div className='play'>
        <i className='fa fa-play-circle  fa-inverse' aria-hidden='true'></i>
      </div>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  );
}


export default Card;





// import React, {useState} from 'react';

// function Card() {

  

//   const [name, setName] = useState('Sam');
//   const [sName, setSName] = useState('Phantom');
//   // const [total, add] = useState('no value')

  
//   function changeName(e) {
//     setName(e.target.value);
//   }
//   function changeSName(e) {
//     setSName(e.target.value);
//     console.log(setName)
//   }

//   function calculate(name, sName) {
//     return name + sName;
//   }

//   return (
//     <div>
//      <input value={name}
//             onChange={changeName}
//      ></input>
//      <input value={sName}
//       onChange={changeSName}
//      >
//      </input>
//      {/* <button style={{padding:".1em", margin:'10px'}} onClick={calculate}> add</button> */}

//   {/* <h1>{calculate(1,2)}</h1> */}
//     </div>
//   );
// }


// const Card = () => {
  
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   function changeIn(){
//     return({
//       setCount: count + 1,
//       setCount2: count2 + 1
//     }
//     )
//   }
//   function changeDe(){
//     return({
//       setCount: count - 1,
//       setCount2: count2 - 1    
//     }
//     )
//   }
//   function reset() {
//     return(
//       {
//         setCount: setCount(0),
//         setCount2: setCount2(0)
//       }
//     )
//   }
  
//   return (
//     <div className="box">
//       <h1>{count} </h1>
//   <h2>{count2}</h2>
//       <button onClick={reset}>RESET</button>
      
//       <button onClick={changeIn}><strong>+</strong></button>
//       <button onClick={changeDe }><strong>-</strong></button>

      
//     </div>
//   )
// }
  

// export default Card