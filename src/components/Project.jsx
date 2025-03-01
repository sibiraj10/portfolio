import ProjectImg1 from '../assets/ecom.jpg'
import Cinebite from '../assets/cinebite.png'
import MoneyTracker from '../assets/moneytracker.png'


const Project = () => {

   
    const config = [
        {
            img:ProjectImg1,
            description :"Payment gateway built with React.js,razorapi",
            link:'https://razorform.netlify.app/'
        },
        {
            img:Cinebite,
            description :"Cinebite, Movie-Finder website built with React.js, Tailwind",
            link:'https://radiant-tanuki-de8ae9.netlify.app/'
        },
        {
            img:MoneyTracker,
            description :"Money Tracker website built with HTMl, CSS, Javascript",
            link:'https://radiant-tanuki-de8ae9.netlify.app/'
        }
       
       
    ]

    return (
        <section id='project' className="bg-primary flex flex-col py-10 px-16">
            <div className='w-full text-white px-14' >
                <h1  className='text-4xl border-b-4 border-secondary w-fit mb-3' >Projects</h1>
                <p className='text-lg mb-4'>These are the some of my best projects. I have build with React.js, JavaScript, Tailwind.</p>
            </div>
 

            <div className='flex flex-col md:flex-row gap-10 justify-center items-center text-white'>
             
             {config.map((e)=>(
                   <div className='relative '>
                   <img className='h-[300px] w-[400px] ' src={e.img} alt="" />
                <div className='project-desc flex flex-col justify-evenly'>
                    <p  >{e.description}</p>
                    <a className='btn ' href={e.link} target='_blank'>View project</a>
                </div>
    

            </div>
            
             ))}
            
        
            </div>
        </section>
    )
}

export default Project