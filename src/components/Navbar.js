// import React, { Component } from 'react'
import React from 'react'
import {Link} from 'react-router-dom';

import moment from 'moment';
// import SearchBar from '../SearchBar';
// export class Navbar extends Component {
  const Navbar = (props)=>{
  // render() {
    return (
      <div>
           <nav className="navbar fixed-top  navbar-expand-lg bg-dark">
           {/* <nav className="navbar fixed-top  navbar-expand-dark bg-white"> */}
  <div className="container-fluid">
    <Link className="navbar-brand newsapp" to="/">News-WebApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon span"></span>
    </button>
    <div className="collapse navbar-collapse collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">Home</Link></li>
        {/* <li className="nav-item"><Link className="nav-link" href="/">About</Link></li> */}
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
       
        
      </ul>
      <i className="clock">{moment().format('MMMM Do YYYY, h:mm:s a')}</i>
     
     <div className="d-flex">
       {/* <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div> */}
       <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px' ,cursor:'pointer'}}></div>
       {/* <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div> */}
       <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
       <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
       {/* <div className="bg-dark  rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div> */}
     </div>
      
    </div>
  </div>
  {/* this is search bar here  */}
{/* <div className="search-bar-container search">
   <SearchBar />
    <div>SearchResults</div>
   </div> */}
</nav> 
      </div>
    )
  // }
}

export default Navbar;
