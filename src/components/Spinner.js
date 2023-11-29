import React from 'react'
// import React, { Component } from 'react'
import loading from './loading.gif'
// export default class Spinner extends Component {
  // converting class based component to function based component using const Spinner the arrow function
  const Spinner =()=>{
  // render() {
    return (
      <div className="text-center">
         {/* spinnner from loading i/o */}
        <img className="my-3" src={loading} alt="loading" />
      </div>
    )
  // }
}
export default Spinner;

