import React from 'react'
import contactpng from "../Assets/images/contact.png"
export default function Contactuspage() {
  return (
    <div className='container'>
      <div className="row">
        <div className='col-12 bg-info p-3 rounded ' >
          <h3>Contact us</h3>
        </div>
      </div >
      <div className='row  align-items-center' >
        <div className='col-md-7  rounded ' >
          <div className=''>
           <h3 className='text-primary mt-3' >How to Contact us:</h3>
           <h5 className='mt-3'>+98 990 993 3527</h5>
           <h5> Telegram : @Rastgoo_sw </h5>
           <h5 className='mb-3'>Arshiarastgoo1@gmail.com</h5>
          </div>
          <div className="mb-3 ">
            <label  className="form-label">Name :</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ex : Rafael " />
          </div>
          <div className="mb-3">
            <label  className="form-label"> Last Name :</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ex : Ninja " />
          </div>
          <div className="mb-3">
            <label  className="form-label"> Your Message :</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=" Type anything . . . . " />
          </div>
          <button className=' btn btn-outline-primary btn-lg' >Register</button>
        </div>
        

        <div className='col-md-5 text-center  ' >
          <img src={contactpng} alt='About-us' className="img-fluid  about-img" ></img>
        </div>
      </div>



    </div>
  )
}
