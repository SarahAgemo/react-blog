// import './TopBar.css'

// function TopBar() {
//   return (
//     <div className='top'>
//       <div className='topLeft'>
//         <i className="topIcon fa-brands fa-facebook"></i>
//         <i className="topIcon fa-brands fa-square-x-twitter"></i>
//         <i className="topIcon fa-brands fa-linkedin"></i>
//         <i className="topIcon fa-brands fa-square-instagram"></i>
//       </div>
//       <div className='topCenter'>
//         <ul className='topList'>
//             <li className='topListItem'>HOME</li>
//             <li className='topListItem'>ABOUT</li>
//             <li className='topListItem'>CONTACT</li>
//             <li className='topListItem'>WRITE</li>
//             <li className='topListItem'>LOGOUT</li>
//         </ul>
//       </div>
//       <div className='topRight'>
//         <img 
//         className='topImg'
//         src="https://avatars.githubusercontent.com/u/160914323?v=4" alt="" />
//         <i className=" topSearchIcon fas fa-search"></i>
//       </div>
//     </div>
//   )
// }

// export default TopBar

import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to="/" className="link">HOME</Link>
          </li>
          <li className='topListItem'>
            <Link to="/about" className="link">ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link to="/contact" className="link">CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link to="/write" className="link">WRITE</Link>
          </li>
          <li className='topListItem'>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (

            <img 
              className='topImg'
              src="https://avatars.githubusercontent.com/u/160914323?v=4" 
              alt="Profile" 
            />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link to="/login" className="link">
                LOGIN
                </Link>
              </li>
              <li className='topListItem'>
                <Link to="/register" className="link">
                REGISTER
                </Link>
              </li>
             
             
            </ul> 
          )
        }
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default TopBar;
