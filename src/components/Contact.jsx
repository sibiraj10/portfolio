

const Contact = () => {
  const config = {
    email:"sibirajselvam1@gmail.com",
    phone:"7358793201"
  }
  return (
   <section className='flex flex-col bg-primary py-20 px-10 items-center'>
               
                   <div id='contact' className='text-white flex flex-col gap-4  items-center'  >
                       <h1 className='text-5xl border-b-4 border-secondary w-fit '>Contact</h1>
                       <p className='text-xl'>If you want more discuss in detai, please contact me</p>
                       <p className='text-xl'> <span className='font-bold'>Email: </span>{config.email}</p>
                       <p className='text-xl'> <span className='font-bold'>Phone: </span>+91 {config.phone}</p>
                  
                   </div>
            
           </section>
  )
}

export default Contact