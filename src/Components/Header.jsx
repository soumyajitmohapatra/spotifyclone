// import React, { useState, useEffect } from "react";

// function Header() {
//   const [{Login,Signup}, setState] = useState({Login:'LOGIN', Signup:'SIGNUP'})

//   function user() {
//    var userName = prompt("Enter Your User Name");   
//    document.title= document.title +" -"+ userName
//   }


//   return (
//     <div>
//         <div className='Navbar'>
//         <div className='btn'>
//           <button
//             style={{
//               background: "rgb(9, 9, 9)",
//               color: "ghostWHite",
//               borderWidth: 0,
//               fontFamily: "Gotham",
//               fontWeight: "bolder",
//             }}
//           >
//             {Signup}
//           </button>
//           <button onClick={user}>{Login}</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header

import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Login: "LOGIN",
      Signup: "SIGNUP",
    }
    this.changeState = this.changeState.bind(this)
  }
  changeState() {
    this.setState({
      Login: "WELCOME",
      Signup: "HI",
    });
  }
  render() {
    return (
      <div className='Navbar'>
        <div className='btn'>
          <button
            style={{
              background: "rgb(9, 9, 9)",
              color: "ghostWHite",
              borderWidth: 0,
              fontFamily: "Gotham",
              fontWeight: "bolder",
            }}
          >
            {this.state.Signup}
          </button>
          <button onClick={this.changeState}>{this.state.Login}</button>
        </div>
      </div>
    );
  }
}

export default Header;

// import React from 'react'

// function Header() {
//     return(
//         <div className='Navbar'>

//             <div className='btn'>
//               <button  style={{
//                   background: "rgb(9, 9, 9)",
//                   color:'ghostWHite',
//                   borderWidth: 0,
//                   fontFamily:'Gotham',
//                   fontWeight:'bolder'
//                   }}>SIGN UP</button>
//               <button >LOG IN</button>
//             </div>
//         </div>
//     )

// }
