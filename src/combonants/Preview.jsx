import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


function Preview({resumeDetails}) {
  return (
    <div style={{ margin: '70px' }} className='shadow p-5 w-100 rounded text-center '>
      <h3>{resumeDetails?.username}</h3>
      <h4>{resumeDetails?.jobTitle}</h4>
      <p><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.mobile}</span></p>
      <a href={resumeDetails?.github} target='_blank' >GITHUB</a>|
      <a href={resumeDetails?.linkedin} target='_blank' >LINKEDIN</a>|
      <a href={resumeDetails?.portfolio} target='_blank' >PORTFOLIO</a>

      <Divider sx={{ fontSize: '25px' }}>SUMMARY</Divider>
      <p style={{ textAlign: 'justify' }}>
        {resumeDetails?.summary}
      </p>
      <Divider sx={{ fontSize: '25px' }}>EDUCATION</Divider>
      <h5 >{resumeDetails?.course}</h5>
      <p><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'>{resumeDetails?.passoutYear}</span></p>

      <Divider sx={{ fontSize: '25px' }}>Proffectional Experiance</Divider>
      <h5 >{resumeDetails?.jobType}</h5>
      <p><span className='mx-2'>{resumeDetails?.combany}</span>|<span className='mx-2'>{resumeDetails?.clocation}</span>|<span className='mx-2'>{resumeDetails?.duration}</span></p>
      <Divider sx={{ fontSize: '25px' }}>Skills</Divider>
      <div className='d-flex flex-wrap justify-content-between my-3'>
        {
          resumeDetails?.userSkills?.map((item,index)=>(
            <Button key={index} className='m-1' variant="contained">{item} </Button>
          ))
        }
      </div>
    </div>
  )
}

export default Preview