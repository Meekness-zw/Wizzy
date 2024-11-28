'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';  // Import motion for animation
import tour from './../../../public/tour.jpg';
import hero1 from '../../../public/Mobile-Hero.svg';
import giraffes from '../../../public/girrafes.svg';
import free from '../../../public/free.svg';
import giraffe from '../../../public/giraffe.svg';
import lake from '../../../public/lake.svg';
import Card from './../components/Card';

function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}           // Initial state (hidden)
      animate={{ opacity: 1 }}           // Final state (visible)
      transition={{ duration: 1, ease: 'easeIn' }} // Smooth transition with ease-in effect
    >
      <div className="relative flex justify-center items-center">
        <Image src={tour} alt="" className='' />
        <h2 className='absolute text-white text-4xl font-bold md:text-8xl'>
          Tour Package
        </h2>
      </div>
      <div className='text-center mt-5'>
        <p className='text-[#C7923E] text-2xl md:text-4xl font-bold'>Choose your Package</p>
        <h2 className='text-2xl font-bold md:text-6xl'>Select your Best Package <br />for your Travel</h2>
      </div>
      <div className='ml-5 md:ml-10 xl:ml-0 mb-10'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto'>
          <Card imgData={giraffes} imgAlt='Giraffes' title='Akagera National Park' description='Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.' button='Learn More' />
          <Card imgData={free} imgAlt='Free Activities' title='Free Activities' description='Explore free activities available in Akagera National Park and make the most of your visit.' button='Learn More' />
          <Card imgData={lake} imgAlt='Lake Kivu' title='Lake Kivu' description='Experience the beauty of Lake Kivu, perfect for relaxation and water activities.' button='Learn More' />
          <Card imgData={giraffe} imgAlt='Giraffe Sanctuary' title='Giraffe Sanctuary' description='Visit the Giraffe Sanctuary to learn about and feed these amazing animals.' button='Learn More' />
          <Card imgData={hero1} imgAlt='Scenic Views' title='Scenic Views' description='Discover stunning views and landscapes throughout Rwanda.' button='Learn More' />
          <Card imgData={lake} imgAlt='Adventure on Water' title='Adventure on Water' description='Join exciting water adventures on the lakes of Rwanda.' button='Learn More' />
          <Card imgData={giraffes} imgAlt='Giraffes' title='Akagera National Park' description='Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.' button='Learn More' />
          <Card imgData={free} imgAlt='Free Activities' title='Free Activities' description='Explore free activities available in Akagera National Park and make the most of your visit.' button='Learn More' />
          <Card imgData={lake} imgAlt='Lake Kivu' title='Lake Kivu' description='Experience the beauty of Lake Kivu, perfect for relaxation and water activities.' button='Learn More' />
          <Card imgData={giraffe} imgAlt='Giraffe Sanctuary' title='Giraffe Sanctuary' description='Visit the Giraffe Sanctuary to learn about and feed these amazing animals.' button='Learn More' />
          <Card imgData={hero1} imgAlt='Scenic Views' title='Scenic Views' description='Discover stunning views and landscapes throughout Rwanda.' button='Learn More' />
          <Card imgData={lake} imgAlt='Adventure on Water' title='Adventure on Water' description='Join exciting water adventures on the lakes of Rwanda.' button='Learn More' />
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
