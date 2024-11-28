'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';  // Import motion
import about from './../../../public/about.jpg';
import beach from './../../../public/beach.jpg'
import view from './../../../public/view.jpg'
import bridge from './../../../public/bridge.jpg';

function Page() {
  const handleBookNow = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}           // Initial state (hidden)
      animate={{ opacity: 1 }}           // Final state (visible)
      transition={{ duration: 1, ease: 'easeIn' }} // Smooth transition with ease-in effect
    >
      <div className="relative h-auto lg:h-screen overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:w-[40%] lg:h-full lg:absolute lg:right-0">
          <Image
            src={about}
            alt="About us"
            className="object-cover"
            layout="fill"
            style={{ objectPosition: 'center right' }}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="absolute top-0 w-full h-full flex flex-col justify-center p-10 text-white bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:static lg:w-[60%] lg:bg-none lg:text-black">
          <h1 className="md:text-6xl text-5xl font-bold mb-5">
            We are dedicated to providing the best travel experience.
          </h1>
          <p className="font-thin md:text-2xl mb-5">
            Discover the Land of Multiple Cultures
          </p>
          <div className='lg:w-[200%] lg:flex justify-center items-center z-30'>
            <div className="lg:bg-white p-2 rounded-[10px]">
              <button
                onClick={handleBookNow}
                className="pl-10 pr-10 pt-2 md:pt-4 md:pb-4 pb-2 rounded-[10px] bg-[#C7923E] text-white text-lg md:text-2xl font-semibold transition-all duration-300 hover:bg-[#b78a30] flex lg:ml-10"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 lg:mt-20">
        <h2 className='md:text-4xl text-[20px] font-bold pb-2'>
          Welcome to Africa Wizzy Safari
        </h2>
        <div className="w-[100%] flex justify-center items-center">
          <div className='w-[40%] lg:w-[30%] bg-[#304F47] p-[2px]'></div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="md:w-[80%]">
          <div className="p-10 mb-10 grid lg:grid-cols-2 lg:gap-10">
            <Image src={beach} alt='img' />
            <p className='mt-5 lg:mt-0 xl:font-[200px] font-thin text-[#515151] leading-8 text-xl xl:leading-loose'>
              Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices.
            </p>
          </div>
          <div className="p-10 mb-10 grid lg:grid-cols-2 lg:gap-10">
            <p className='mt-5 lg:mt-0 font-thin text-[#515151] leading-8 text-xl order-2 lg:order-1 xl:leading-loose'>
              At Africa Wizzy safari, we offer a wide range of tours and activities, including cultural and historical tours, wildlife safaris, mountain gorilla trekking, and more. Our experienced and knowledgeable guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Rwanda.
            </p>
            <Image src={bridge} alt='img' className='h-[400px] order-1 lg:order-2' />
          </div>
          <div className="p-10 mb-10 grid lg:grid-cols-2 lg:gap-10">
            <Image src={view} alt='img' />
            <p className='mt-5 lg:mt-0 font-thin text-[#515151] leading-8 text-xl xl:leading-loose'>
              We are proud to have received numerous awards and accolades for our commitment to excellence, including the RDD award and the Excellence award.

              Thank you for choosing Africa Wizzy Safari for your travel needs in Rwanda. We look forward to welcoming you on one of our tours soon!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Page;
