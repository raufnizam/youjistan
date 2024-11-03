import Navbar from './components/Navbar';
import NewGrid from './components/NewGrid';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-hidden '>

      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      </div>

      <div className='container mx-auto px-8'>
         <Navbar />  
         <div className="pt-24">

         <NewGrid />
          <Projects />
          <ContactForm />
          <Footer />
          
         </div>
         
      </div>
      
    </div>
  )
}

export default App;