import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);
 const App = () => {
return (
  <div className='flex-center h-screen bg-[#000000]'>
    {/* <h1 className='text-indigo-400 '>Hello GSAP</h1> */}
    <main className='text-3xl'>
      <Navbar />
    </main>
  </div>
);
}
export default App