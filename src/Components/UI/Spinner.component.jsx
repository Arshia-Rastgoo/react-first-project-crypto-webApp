import React from 'react'
import spinner from "../../Assets/images/spinner.gif"
export default function Spinnercomponent() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <img src={spinner} alt='Spinner'></img>
    </div>
  )
}
