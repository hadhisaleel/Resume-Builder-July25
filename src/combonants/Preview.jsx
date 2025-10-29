import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


function Preview() {
  return (
    <div style={{ margin: '70px' }} className='shadow p-5 w-100 rounded text-center '>
      <h3>Name</h3>
      <h4>job title</h4>
      <p><span className='mx-2'>location</span>|<span className='mx-2'>Email</span>|<span className='mx-2'>mobile</span></p>
      <a href="" target='_blank' >GITHUB</a>|
      <a href="" target='_blank' >LINKEDIN</a>|
      <a href="" target='_blank' >PORTFOLIO</a>

      <Divider sx={{ fontSize: '25px' }}>SUMMARY</Divider>
      <p style={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum voluptatibus aut, qui, nemo atque laudantium facilis quidem ab voluptatem illo deserunt, doloribus reprehenderit eveniet fuga libero commodi labore illum?
      </p>
      <Divider sx={{ fontSize: '25px' }}>EDUCATION</Divider>
      <h5 >Course name</h5>
      <p><span className='mx-2'>college</span>|<span className='mx-2'>university</span>|<span className='mx-2'>passout</span></p>

      <Divider sx={{ fontSize: '25px' }}>Proffectional Experiance</Divider>
      <h5 >Job/Internship</h5>
      <p><span className='mx-2'>Company Name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>duration</span></p>
      <Divider sx={{ fontSize: '25px' }}>Skills</Divider>
      <div className='d-flex flex-wrap justify-content-between my-3'>
        <Button className='m-1' variant="contained">Contained </Button>
      </div>
    </div>
  )
}

export default Preview