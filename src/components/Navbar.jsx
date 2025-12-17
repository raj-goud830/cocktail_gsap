import React from 'react'
import { navLinks } from '../constant/index.js'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import '../css/Navbar.css'
const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', {
            backgroundColor: 'transparent',
        },
            {
                backgroundColor: '#000000',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        );
    })

    return (
        <nav>
            <div className='flex items-center justify-between flex-col md:flex-row bg-[#000000] text-[#ffffff] gap-2 p-[5em] pt-3'>
                <a href="#home" className='flex items-center gap-2 '>
                    <img className='img' src="../images/logo.png" alt="logo image" />
                    <p className='text-[14px] md:text-3xl flex flex-col md:flex-row'>velvet pour</p>
                </a>

                <ul className='flex justify-between gap-8 text-sm md:text-2xl text-[#676666]-500'>
                    {navLinks.map((link) => (
                        <li key={link.id} ><a href={`#${link.id}`}>{link.title}</a></li>
                    ))}
                </ul>
            </div>
        </nav>

    );
}
export default Navbar;