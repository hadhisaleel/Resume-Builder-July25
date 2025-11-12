import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';


function Headear() {
    const projectInfo = "A Resume Builder App is a user-friendly tool designed to help individuals create professional and well-structured resumes quickly and easily. It allows users to enter their personal details, education, skills, experience, and achievements through simple input forms. The app then automatically formats the information into an attractive and organized resume layout. Many resume builder apps also offer customizable templates, downloadable PDF options, and suggestions for improving content. This makes it ideal for students, job seekers, and professionals who want to present their qualifications effectively and stand out to potential employers."
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="data:image/png;base64,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" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className='text-light text-decoration-none' to={'/'}>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">About Us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Headear