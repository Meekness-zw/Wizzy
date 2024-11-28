import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';

interface NewCards {
  imgData: StaticImageData,
  imgAlt: string,
  description: string
}

function NewCards(props: NewCards) {
  return (
    <div className="flex items-center justify-center">
      <div className='flex flex-col justify-center items-center bg-[#304F47] p-5 text-center rounded-[10px] w-[100%]'>
        <Image src={props.imgData} alt={props.imgAlt} />
        <p className='pt-5 text-white'>{props.description}</p>
      </div>
    </div>
  )
}

export default NewCards
