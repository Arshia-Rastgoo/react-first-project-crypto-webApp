import React from 'react'
import spinner from "../../Assets/images/spinner.gif"
export default function Spinnercomponent() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <img className='mb-20' src={spinner} alt='Spinner'></img>
      <div className='mt-20'>
        <h3 >fetching Data from API :)</h3>
      </div>
    </div>
    
  )
}
