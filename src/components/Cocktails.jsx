import React from 'react'
import { cocktailLists } from '../constant/index.js';
 const Cocktails = () => {
return (
    <>
        <section className='text-white bg-[#0a0a0a] min-h-dvh w-full relative mix-blend-screen overflow-hidden' style={{ backgroundImage: "url('/images/noise.png')" }}>
        <img src="../images/cocktail-left-leaf.png" alt="l-left" className='absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3' />
            <img src="../images/cocktail-right-leaf.png" alt="r-left" className='absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3' />
            
            <div className='container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-190 2xl:px-0 px-5'>
                <div className='space-y-8 w-full md:w-fit'>
                    <h2 className='text-xl font-medium'>Make your Cocktails:</h2>

                    <ul className='space-y-8'>
                        {cocktailLists.map(({name, country, detail,price}) => {
                            <li className='flex justify-between items-start' key={name}>
                                <div className='md:me-28'>
                                    <h3 className='font-modern-negra 2xl:text-3xl text-xl text-yellow'>{name}</h3>
                                    <p className='text-sm'>{detail} | {country}</p>
                                    <span className='text-xl font-medium'>{price}</span>
                            </div>
                        </li>
                        }
                        )}
                    </ul>
                </div>
            </div>
        </section>
    </>
);
}
export default Cocktails