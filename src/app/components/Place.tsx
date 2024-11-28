import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PlaceProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
}

const Place: React.FC<PlaceProps> = ({ imgData, imgAlt, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={imgData} alt={imgAlt} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-center md:w-[80%]">{description}</p>
    </div>
  );
};

export default Place;
