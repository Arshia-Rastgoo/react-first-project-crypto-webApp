import React from 'react'
import imageabout from '../Assets/images/about.png'
export default function AboutUspage() {
  return (
    <div className='container'>
      <div className="row">
        <div className='col-12 bg-info p-3 rounded ' >
          <h3>About us</h3>
        </div>
      </div >
      <div className='row  align-items-center' >
        <div className='col-md-7  rounded ' >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Obcaecati illum molestiae deserunt ipsum accusantium quis impedit odit esse, quod hic error eum architecto similique accusamus aspernatur amet, beatae blanditiis porro natus. Nobis repudiandae perspiciatis aspernatur! Consectetur sint et repellendus ex numquam architecto. Nulla nemo itaque mollitia illum impedit pariatur obcaecati quis deleniti assumenda cupiditate unde totam vel sunt aliquam sed sapiente distinctio dicta cum debitis, officiis labore consectetur. Nulla aliquam soluta ullam quaerat alias esse fuga exercitationem, quam neque similique expedita aut rem atque libero inventore unde dolor quasi a aperiam asperiores illo tempore at iure? Quam corrupti animi odio.
        </div>
        <div className='col-md-5 text-center  ' >
          <img src={imageabout} alt='About-us' className="img-fluid  about-img" ></img>
        </div>
      </div>



    </div>
  )
}
