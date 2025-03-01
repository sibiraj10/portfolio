import AbtMe from '../assets/about.png'

const AboutMe = () => {
  const config = {
    line1:"Hi, My name is sibiraj. I am a Front-end developer.",
    line2:"As a Frontend Developer, I build dynamic and responsive web applications using React.js and Tailwind CSS. I strive to create visually appealing, user-friendly interfaces with efficient and maintainable code.",
    line3:"I am proficient in Frond-end skills like HTML, CSS, Tailwind, JavaScript, React.js."
  }
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary items-center px-5 py-10'>
        <img src={AbtMe} className='md:w-1/2'></img>
        <div className='md:w-1/2'>
            <div className='text-white flex flex-col gap-4' >
                <h1 className='text-4xl border-b-4 border-primary w-fit '>About Me</h1>
                <p className='about-p'>{config.line1}</p>
                <p className='about-p'>{config.line2}</p>
                <p className='about-p'>{config.line3}</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe