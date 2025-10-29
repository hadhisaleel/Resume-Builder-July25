import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div>
      <img  src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png" alt="" />
      <Link className='btn btn-success' to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Pnf