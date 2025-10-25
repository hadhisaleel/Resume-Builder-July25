import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png ')",backgroundAttachment:'fixed',
        backgroundPosition:'top',backgroundSize:'cover'
      }} className='d-flex justify-content-center align-items-center'>
        <div className='shadow border py-5 rounded mt-5 text-center' style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
          <h3> Designed to get hired. <br />
             Your Skills ,Your story , your next job - all in one </h3>
            <Link to={'/resume'} className="btn text-white" style={{backgroundColor:"purple"}}> Make Your Resume</Link>
        </div>
      </section>
      {/* tool */}
      <section className='m-5'>
        <h1 className='text-center'>Tools</h1>
        <div className="row container">
          <div className="col-md-6">
            <div className="my-3">
              <h4>Resume</h4>
              <p>Create Ulimited new resumes easily edit them atferwards. </p>
            </div>
             <div className="my-3">
              <h4>Cover Letter</h4>
              <p>Easily write proffetional cover letter </p>
            </div>
             <div className="my-3">
              <h4>Jobs</h4>
              <p>Automattically receive new and relevent job postings. </p>
            </div>
             <div className="my-3">
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job application in an organized manner. </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png " alt="" />
          </div>
        </div>
      </section>
      {/* image */}
      <section style={{ height:'500px',width:'100%', backgroundImage:'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg")',
        backgroundPosition:'top',backgroundSize:'cover', backgroundAttachment:'fixed'
      }}></section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimonial</h1>
        <div className="row container">
          <div className="col-md-5">
            <h3 className='my-5'>Trusted by professionals worldwide.
</h3>
<p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
</p>
<p className='fs-5'style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
</p>
<p className='fs-5'style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row my-3">
              <div className="col-3 ">
                <img className='w-100'  src="https://rtvision.in/wp-content/uploads/person2.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'  src="https://rtvision.in/wp-content/uploads/person3.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'   src="https://rtvision.in/wp-content/uploads/person4.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'   src="https://rtvision.in/wp-content/uploads/person5.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'  src="https://rtvision.in/wp-content/uploads/person6.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'  src="https://law.northeastern.edu/wp-content/uploads/2021/02/Sharon-Persons-web-NUSL-2022_6301-1024x1024.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'  src="https://www.osu.edu/giving/sites/default/files/inline-images/Persons-1.jpg" alt="" />
              </div>
             <div className="col-3">
                <img className='w-100' src="https://rvkflowtech.com/wp-content/uploads/2019/02/person1.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100' src="https://www.iom3.org/static/46d95062-0906-427d-bf91f52aff812b41/whoswhogrid_a2f960173125876b45a1d78e4b52192c_4a7c7e45a350/Hamish-Dow-ScotlandPNG.png" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'  src="https://s48151.pcdn.co/wp-content/uploads/2025/01/Matthew-Persons.webp" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'  src="https://rtvision.in/wp-content/uploads/person5.jpg" alt="" />
              </div>
              <div className="col-3">
                <img className='w-100'  src="https://rtvision.in/wp-content/uploads/person2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage