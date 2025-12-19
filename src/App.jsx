import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

gsap.registerPlugin(ScrollTrigger, SplitText);
 const App = () => {
return (
  <div className='flex-center h-screen bg-[#000000]'>
    <main className='text-3xl'>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  </div>
);
}
export default App