import React from 'react'
import '../css/Hero.css'
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(SplitText);
const Hero = () => {

        useGSAP(() => {
                const heroSplit = new SplitText('.title', { type: 'chars, words' });
                const paraSplit = new SplitText('.subtitle', { type: 'lines' });

                heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

                gsap.from(heroSplit.chars, {
                        yPercent: 100,
                        duration: 1.8,
                        ease: 'expo.out',
                        stagger: 0.05
                });

                gsap.from(paraSplit.lines, {
                        opacity: 0,
                        yPercent: 100,
                        duration: 1.5,
                        ease: 'expo.out',
                        stagger: 0.1,
                        delay: 1
                });

                gsap.timeline({
                        scrollTrigger: {
                                trigger: '#hero',
                                start: 'top top',
                                end: 'bottom top',
                                scrub: true,
                        }
                })
                        .to('.right-leaf', { y: 200 }, 0)
                        .to('.left-leaf', { y: -200 }, 0)
                
        }, []);


        return (
                <>
                        <section id='hero' className='absolute inset-0 size-full' style={{ backgroundImage: "url('/images/noise.png')" }}>
                                <h1 className='title md:mt-32 mt-40 text-7xl md:text-[8vw] text-white leading-none text-center'>MOJITO</h1>

                                <img src="../images/hero-left-leaf.png" alt=""
                                        className='absolute left-leaf left-0 md:top-20 xl:top-36 md:bottom-auto -bottom-20 md:w-fit w-1/3' />

                                <img src="../images/hero-right-leaf.png" alt=""
                                        className='absolute right-leaf right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24' />

                                <div className='container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5'>
                                        <div className='flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto'>
                                                <div className='space-y-5 hidden subtitle md:block'>
                                                        <p className='2xl:text-start text-white text-center'>cool. crisp. classic.</p>
                                                        <p className='text-6xl text-yellow-300 max-w-xl ' id='qaute'>Sip the spirit <br /> of summer</p>
                                                </div>
                                                <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
                                                        <p className="subtitle 2xl:text-start text-white text-left">
                                                           Every cocktail on our menu is ablend of premium ingredient,creative flair, and timeless recipes- designed to delight your sense
                                                        </p>
                                                        <a className='font-semibold subtitle text-yellow-200 opacity-80 2xl:text-start text-center hover:text-yellow' id='cocktails' href="#cocktails"> view cocktail</a>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </>
        );
}
export default Hero