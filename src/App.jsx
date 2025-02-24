import React from "react"

import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Testimonails from "./components/Testimonails"
import Contact from "./components/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ()  =>{
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonails/>
      <Contact />
    </div>
  )
}

export default App
