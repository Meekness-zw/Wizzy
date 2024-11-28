import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Reviews {
    img: StaticImageData,
    name: string,
    review: string,
}
function Reveiws(props: Reviews) {
    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center text-center pb-10   md:p-5 lg:p-8 xl:p-10 shadow-lg shadow-[#9A9AB0]'>
                <div className=" ">
                    <Image src={props.img} alt="user-pic" className='border-[4px] border-[#304F47] rounded-full'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h2 className='font-bold text-2xl lg:text-2xl md:text-lg mt-5'>{props.name}</h2>
                    <p className=' text-left'>{props.review}</p>
                </div>
            </div>
        </div>
    )
}

export default Reveiws
