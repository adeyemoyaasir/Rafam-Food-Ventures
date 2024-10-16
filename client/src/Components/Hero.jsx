import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import LogImg from '../assets/image/13a.png'

function Hero({ data, info, banner }) {
    const [current, setCurrent] = useState(0)
    const length = data.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        console.log('current', current)

        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    },[current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(data) || data.length <= 0){
        return null
    }

  return (
<div className='h-[50vh] w-[100vw] relative overflow-hidden flex items-center justify-center'>
        <div className="w-full h-full overflow-hidden flex items-center justify-center relative">
            {
                data.map((item, idx) => {
                   return (
                    <div className="w-full h-full z-10" key={idx}>
                        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-40'></div>
                        { idx === current && (
                            <div className="image-slide absolute top-0 left-0 h-full w-full flex items-center justify-center">
                                <img src={item.img} alt={item.alt} className='absolute top-0 left-0 w-full h-full object-cover object-center' />
                                {
                                    info ? (
                                        <div className="relative z-20 flex flex-col mt-[300px]">
                                            {/** 
  
                                            */}
                                        </div>

                                    ) : 
                                    ''
                                }
                            </div>
                        )}
                    </div>
                   ) 
                })
            }
            <div className="absolute bottom-[50px] right-[50px] flex z-20">
                <div className="w-[50px] h-[50px] bg-red-600 text-white rounded-full mr-4 flex items-center justify-center cursor-pointer select-none duration-300 p-2" onClick={prevSlide}><IoIosArrowBack className='text-[60px]' /></div>
                <div className="w-[50px] h-[50px] bg-red-600 text-white rounded-full mr-4 flex items-center justify-center cursor-pointer select-none duration-300 p-2" onClick={nextSlide}><IoIosArrowForward className='text-[60px]' /></div>                
            </div>
            {
                banner && (
                    <div className='z-[100] absolute m-auto flex items-center justify-center w-full h-full bg-none'>
                        

                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Hero