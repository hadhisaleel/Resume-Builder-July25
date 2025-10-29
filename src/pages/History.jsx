import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { RiDeleteBin6Fill } from "react-icons/ri";

function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>

      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-80px' }}>Back</Link>
      <Box component="section" className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
<Paper elevation={3} sx={{my:5,p:5,textAling:'center'}}>
  <div className="d-flex justify-content-between aling-items-center">
    <h6>Review At: 8/29/2005,9:45:56 AM</h6>
    <button className='btn btn-danger fs-4'><RiDeleteBin6Fill />
</button>

  </div>
  <div className="border rounded p-3">
    <img width={'200px'} height={'200px'} src="https://cdn.enhancv.com/predefined-examples/GYoE6339K8t2epre3lOwctSBolCxSbxwRlD57pBM/image.png" alt="" />
  </div>
</Paper>
        </div>
      </div>
    </Box>
    </div>
  )
}

export default History