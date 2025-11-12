import React, { useEffect,useState } from 'react'

import Preview from "../combonants/Preview";
import { useParams,Link } from 'react-router-dom';
import {addHistoryAPI, getResumeAPI,} from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";

import { MdRefresh } from "react-icons/md";
import { FaBackward } from "react-icons/fa";
import Edit from '../combonants/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



function ViewResume() {
   const {id} =useParams()
   console.log(id);
    const [resume,setResume] = useState({})
useEffect(()=>{
    getResumeDetails()
},[])
  const  getResumeDetails = async()=>{
   const result = await getResumeAPI(id)
   console.log(result);
   if(result.status==200){
    setResume(result.data)
   }
  }
  const handleDownloadResume =async()=>{
//    create pdf document
const doc = new jsPDF();
const preview = document.getElementById("preview")
//  screenshort of prewiev html2canvas
const canvas = await html2canvas(preview,{scale:2})
// console.log(canvas);
// conver canvas to image
const resumeImg = canvas.toDataURL('image/png')
// console.log(resumeImg);

// /add screen short to pdf
const pageWidth = doc.internal.pageSize.getWidth()
// const pageHieght = doc.internal.pageSize.getHeight()
const imgWidth = pageWidth-20 
const imgHieght =canvas.height*imgWidth/canvas.width
doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHieght)
// download pdf
doc.save(`${resume.username}-resume.pdf`)
// local time data = new Date
const localTimeDate = new Date()
// console.log(localTimeDate);
const timeStamp = `${localTimeDate.toLocaleDateString()} ,${localTimeDate.toLocaleTimeString()}`
// console.log(timeStamp);
try {
    await addHistoryAPI({timeStamp,resumeImg})
} catch (err) {
    console.log(err);
    
}

  }
  return (
   <>
        <div className="container my-5">
            <div className="row container">
                <div className="col-md-2"></div>
                <div className="col-md-8 col-12">
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        <button onClick={handleDownloadResume} className="btn fs-4 text-primary"><FaFileDownload/> </button>
                       <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                        <Link to={'/history'} className="btn fs-4 text-primary"><MdRefresh/></Link>
                        <Link to={'/resume'} className="btn fs-4 text-success"><FaBackward/></Link>
                    </div>
                  <div id='preview'>  <Preview resumeDetails={resume}/></div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        
   </>
  )
}

export default ViewResume