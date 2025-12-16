import React from 'react'
import { navLinks } from '../constant/index.js'
import { useGSAP } from '@gsap/react';
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
            <div className='flex items-center justify-between bg-[#000000] text-[#ffffff] space gap-2 mr-4 p-[5em] pt-3 ml-4'>
                <a href="#home" className='flex items-center gap-2 '>
                    <img src="../images/logo.png" alt="logo image" />
                    <p>velvet pour</p>
                </a>

                <ul className='flex justify-between gap-8 text-xl text-[#434343]'>
                    {navLinks.map((link) => (
                        <li key={link.id} ><a href={`#${link.id}`}>{link.title}</a></li>
                    ))}
                </ul>
            </div>
        </nav>

    );
}
export default Navbar;