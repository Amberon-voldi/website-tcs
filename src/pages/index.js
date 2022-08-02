import React, {useState} from 'react'
import HeroSelection from '../components/HeroSelection';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/services';

import InfoText from '../components/IntroText';
import Footer from '../components/Footer';
import FAQDropDown from '../components/DropDown_FAQ';



function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <> 
      <Sidebar isOpen={isOpen} toggle={toggle} /> 
     <Navbar toggle={toggle} isOpen={isOpen}/>

     <HeroSelection />
   <InfoText />
     <Services />
     <FAQDropDown />
   
     <Footer />
     
     
     
    

    
  
    </>
  )
}

export default Home
