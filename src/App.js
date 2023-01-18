import './css/App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"

import Service from './components/service/Main';
import StudentVsa from './components/service/StudentVisa';
import WorkVsa from './components/service/WorkVisa';
import VisitorVisa from './components/service/VisitorVisa';
import PR from './components/service/PR';
import Citizen from './components/service/Citizen';
import PhoneMenu from './components/PhoneMenu';

import Contact from "./components/Contact"

import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className="main-content">
            <Header/>
            <PhoneMenu/>
             <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/service" element={<Service/>}/>
                <Route exact path="/service/student-visa" element={<StudentVsa/>}/>   
                <Route exact path="/service/work-visa" element={<WorkVsa/>}/>
                <Route exact path="/service/visitor-visa" element={<VisitorVisa/>}/>
                <Route exact path="/service/PR" element={<PR/>}/>
                <Route exact path="/service/citizenship" element={<Citizen/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


window.addEventListener("load", function(){
  var bodyS = document.body.style
  bodyS.overflowX ="hidden"
  const appearOptions = {
      root:null,
      threshold:0,
      rootMargin:"0px 0px -150px 0px"
  }       

  const faders = document.querySelectorAll(".fade-in")
  const sliders = document.querySelectorAll(".slide-in")
  
  const appearOnScroll = new IntersectionObserver
  (function(
      entries,
      appearOnScroll
  ){
      entries.forEach(entry => {
          if(!entry.isIntersecting){
              return
          }else{
              entry.target.classList.add("appear")
              appearOnScroll.unobserve(entry.target)
          }
  
      })
  },appearOptions)
  
  
  faders.forEach(fader=>{
      appearOnScroll.observe(fader)
  })

  sliders.forEach(slider=>{
      appearOnScroll.observe(slider)
  })


});

export default App;
