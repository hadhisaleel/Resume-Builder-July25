import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";
const steps = ['Basic Information', 'Contact details', 'Educational Details', 'Work Experiance', 'Skills & Certifications', 'Review & Submit'];

function UserInputs() {
  const skillSuggestionArray=['NODE JS','REACT','ANGULAR','MONGODB','EXPRESS JS','LEADERSHIP','COMMUNICATION','COACHING','POWER BI','MS EXCEL']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
// create state for storing resume details

const[resumeDetails,setResumeDetails] = React.useState({
  username:"",
  jobTitle:"",
  location:"",
  email:"",
  mobile:"",
  github:"",
  linkedin:"",
  portfolio:"",
  course:"",
  college:"",
  university:"",
  passoutYear:"",
  jobType:"",
  combany:"",
  clocation:"",
  duration:"",
  userSkills:[],
  summary:""
})
console.log(resumeDetails);


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const renderSteps = (stepCount)=>{
    switch(stepCount){
        case 0 : return (
       <div>
        <h3>Personal Details</h3>
        <div className="row p-3">
            <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField  value={resumeDetails.jobTitle}  onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})}  id="standard-basic-job" label="Job Tittle" variant="standard" />
            <TextField  value={resumeDetails.location}  onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})}  id="standard-basic-location" label="Location" variant="standard" />
        </div>
       </div>
        )
          case 1 : return (
       <div>
        <h3>Contact Details</h3>
        <div className="row p-3">
            <TextField  value={resumeDetails.email}  onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})}  id="standard-basic-email" label="Email" variant="standard" />
            <TextField  value={resumeDetails.mobile}  onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})}  id="standard-basic-phone" label="Phone Number" variant="standard" />
            <TextField  value={resumeDetails.github}  onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})}  id="standard-basic-github" label="GitHub profile Link" variant="standard" />
           <TextField  value={resumeDetails.linkedin}  onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})}  id="standard-basic-linkedin" label="LinkedIn profile Link" variant="standard" />
           <TextField  value={resumeDetails.portfolio}  onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})}  id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />


        </div>
       </div>
        )
          case 2 : return (
       <div>
        <h3>Education Details</h3>
        <div className="row p-3">
            <TextField  value={resumeDetails.course}  onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})}  id="standard-basic-course" label="Course Name" variant="standard" />
            <TextField  value={resumeDetails.college}  onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})}  id="standard-basic-college" label="College Name" variant="standard" />
            <TextField  value={resumeDetails.university}  onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})}  id="standard-basic-university" label="University" variant="standard" />
           <TextField  value={resumeDetails.passoutYear}  onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})}  id="standard-basic-passout" label="Year of passout" variant="standard" />
        


        </div>
       </div>
        )
          case 3 : return (
       <div>
        <h3>Preffotional Details</h3>
        <div className="row p-3">
            <TextField  value={resumeDetails.jobType}  onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})}  id="standard-basic-job" label="Job Or Intership" variant="standard" />
            <TextField  value={resumeDetails.combany}  onChange={e=>setResumeDetails({...resumeDetails,combany:e.target.value})}  id="standard-basic-company" label="Company Name" variant="standard" />
            <TextField  value={resumeDetails.clocation}  onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})}  id="standard-basic-location" label="Location" variant="standard" />
           <TextField  value={resumeDetails.duration}  onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})}  id="standard-basic-duration" label="Duration" variant="standard" />
         


        </div>
       </div>
        )
          case 4 : return (
       <div>
        <h3>Skills</h3>
        <div className="d-flex align-items-center justify-content-between p-3 w-100">
    <input placeholder='Add Skills' type="text" className="form-control" />
           <Button variant='text'>Add</Button>

        </div>
        <h5>Suggections</h5>
       <div className='d-flex flex-wrap justify-content-between my-3'> 
     {
      skillSuggestionArray.map((item,index)=>(
           <Button key={index} variant='outlined' className='m-2'>{item}</Button>
      ))
     }
        </div>
        <h5>Added Skills:</h5>
         <div className='d-flex flex-wrap justify-content-between my-3'>
          <Button className='m-1' variant="contained">Contained <FaXmark className='ms-2 cursor-pointer' /></Button> 
          </div>
       </div>
        )
          case 5 : return (
       <div>
        <h3>Proffectional summary</h3>
        <div className="p-3 row">
           <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})}   id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={7}
           defaultValue={'I am a passionate MERN Stack Developer skilled in building dynamic, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. I have hands-on experience in designing RESTful APIs, managing databases, and developing interactive front-end interfaces that deliver seamless user experiences. With strong problem-solving skills and a solid understanding of JavaScript, I enjoy turning complex requirements into efficient, maintainable, and clean code. I am constantly exploring new technologies to stay updated with modern web development trends and best practices'}/>
        </div>
       </div>
        )
        default : return null
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render content according to step */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );

}

export default UserInputs