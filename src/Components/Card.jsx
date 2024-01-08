import React from 'react'
import './Card.css'


const Card = () => {
  return (
<div  className="card mt-3 " style={ {"width":"18rem"}}>
  <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">Card title</h5>
    <p  className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
    
  <select className='m-2 h-100 bg-success rounded'>
      {Array.from(Array(6)).map((_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>

    <select name="no" id="item" padding={"2em"} className='select'>
    <option value="half">Half</option>
    <option value="full">Full</option>
  </select>
  <div className='d-inline h-100 fs-5'>Total Cost</div>
  </div>
</div>
  )
}

export default Card