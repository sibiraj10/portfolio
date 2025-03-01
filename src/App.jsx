
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="font-body">
       <Header/>  
       <Hero/>
       <AboutMe/>
       <Project/>
       <Resume/>
       <Contact/>
       <Footer/>
    </div>
   
    
  )
}

export default App
