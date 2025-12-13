import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);
 const App = () => {
return (
  <div className='flex-center h-screen'>
   <h1 className='text-indigo-400 min-w-full ml-[15em]'>Hello GSAP</h1>
  </div>
);
}
export default App