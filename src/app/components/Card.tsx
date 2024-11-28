import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface PackageProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
    description: string;
    button: string;
}

function Card(props: PackageProps) {
    return (
        <div className='border-[2px] border-[#E1E1E1] rounded-[20px] w-[95%] md:w-[90%] flex flex-col mt-10'>
            <Image src={props.imgData} alt={props.imgAlt} className='w-full rounded-t-[20px]' />
            <div className='p-4 flex-grow'>
                <h1 className='text-[#11142D] text-3xl font-semibold mb-2'>{props.title}</h1>
                <p className='text-lg mb-5'>{props.description}</p>
            </div>
            <div className='p-4'>
                <button className='bg-[#C7923E] text-white font-semibold p-3 rounded-[10px] w-full'>
                    {props.button}
                </button>
            </div>
        </div>
    );
}

export default Card;
