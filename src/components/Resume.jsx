import ResumeImg from '../assets/resume.jpg'

const Resume = () => {
    const config = {
        link:"https://drive.google.com/file/d/1dR7ZQ0gghRX7J-SEHiWEASN0yLgmsEiU/view?usp=sharing"
    }
  return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary items-center   gap-4 md:gap-[180px] px-5 py-10 w-full font-hero-font'>
            <img src={ResumeImg} className='w-[50%] ml-8'></img>
            <div className='md:w-1/2'>
                <div className='text-white flex flex-col items-center  md:items-start gap-4' >
                    <h1 className='text-4xl border-b-4 border-primary w-fit '>Resume</h1>
                    <p className='about-p text-center flex items-center'>You can view my resume <a href={config.link} target='_blank ' className='btn ml-4'>Download</a></p>
               
                </div>
            </div>
        </section>
  )
}

export default Resume