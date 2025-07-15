import Navbar from './components/Navbar';
import NewGrid from './components/NewGrid';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-hidden '>
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>


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