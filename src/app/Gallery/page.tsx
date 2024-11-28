'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import framer motion for animation
import gallery from './../../../public/gallery.jpg';
import monkey from './../../../public/monkey.svg';
import valley from './../../../public/valley.svg';
import lakeview from './../../../public/lakeview.svg';
import canoe from './../../../public/canooing.svg';
import hut from './../../../public/hut.svg';
import bench from './../../../public/bench.svg';
import field from './../../../public/field.svg';
import one from './../../../public/one.jpg'
import two from './../../../public/two.jpg'
import three from './../../../public/three.jpg'
import four from './../../../public/four.jpg'
import five from './../../../public/five.jpg'
import six from './../../../public/six.jpg'
import seven from './../../../public/seven.jpg'
import eight from './../../../public/eight.jpg'

function Page() {
    return (
        <motion.div
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Become visible
            transition={{ duration: 1, ease: 'easeIn' }} // Smooth fade-in transition
        >
            {/* Gallery Header */}
            <div className="relative flex justify-center items-center">
                <Image src={gallery} alt="Gallery Background" className="object-cover w-full h-[300px] md:h-[600px]" />
                <h2 className="absolute text-white text-4xl font-bold md:text-8xl">
                    Gallery
                </h2>
            </div>

            {/* Gallery Content */}
            <div className="flex justify-center items-center mt-20 mb-20">
                <div className=" w-[80%] md:w-[90%]">
                    {/* Instagram Button */}
                    <a
                        href="https://www.instagram.com" // Link to Instagram (replace with actual link)
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" mr-5 bg-[#C7923E] text-white px-6 py-3 rounded-[5px] text-lg font-semibold transition-all duration-300 hover:bg-[#b78a30] flex items-center w-[45%] md:w-[25%] lg:w-[15%] mb-10"
                    >
                        Visit Instagram
                    </a>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                        {/* Column 1 */}
                        <div className="space-y-2">
                            <Image src={monkey} alt="Monkey" className="object-cover w-full h-[250px] rounded-lg" />
                            <Image src={bench} alt="Bench" className="object-cover w-full h-[250px] rounded-lg" />
                        </div>
                        {/* Column 2 (Giraffe Image Spanning Two Rows) */}
                        <div className="col-span-1 row-span-1">
                            <Image src={two} alt="Giraffe" className="object-cover w-full h-[500px] rounded-lg" />
                        </div>
                        {/* Column 3 */}
                        <div className="space-y-1">
                            <Image src={field} alt="Field" className="object-cover w-full h-[250px] rounded-lg" />
                            <Image src={one} alt="Valley" className="object-cover w-full h-[250px] rounded-lg" />
                        </div>
                        {/* Column 4 */}
                        <div className="space-y-1 md:hidden lg:block">
                            <Image src={lakeview} alt="Lake View" className="object-cover w-full h-[250px] rounded-lg" />
                            <div className="flex space-x-2">
                                <Image src={hut} alt="Hut" className="object-cover w-[48%] h-[250px] rounded-lg" />
                                <Image src={five} alt="Canoeing" className="object-cover w-[48%] h-[250px] rounded-lg" />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-20">
                        {/* Column 1 */}
                        <div className="space-y-2">
                            <Image src={three} alt="Monkey" className="object-cover w-full h-[250px] rounded-lg" />
                            <Image src={canoe} alt="Bench" className="object-cover w-full h-[250px] rounded-lg" />
                        </div>
                        {/* Column 2 (Giraffe Image Spanning Two Rows) */}
                        <div className="space-y-1">
                            <Image src={field} alt="Field" className="object-cover w-full h-[250px] rounded-lg" />
                            <Image src={valley} alt="Valley" className="object-cover w-full h-[250px] rounded-lg" />
                        </div>
                        {/* Column 3 */}
                        <div className="col-span-1 row-span-1">
                            <Image src={seven} alt="Giraffe" className="object-cover w-full h-[500px] rounded-lg" />
                        </div>
                        {/* Column 4 */}
                        <div className="space-y-1 md:hidden lg:block">
                            <Image src={lakeview} alt="Lake View" className="object-cover w-full h-[250px] rounded-lg" />
                            <div className="flex space-x-2">
                                <Image src={hut} alt="Hut" className="object-cover w-[48%] h-[250px] rounded-lg" />
                                <Image src={three} alt="Canoeing" className="object-cover w-[48%] h-[250px] rounded-lg" />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-20">
                        {/* Column 1 */}
                        <div className="space-y-2">
                            <Image src={monkey} alt="Monkey" className="object-cover w-full h-[250px] rounded-lg" />
                            <Image src={four} alt="Bench" className="object-cover w-full h-[250px] rounded-lg" />
                        </div>
                        {/* Column 2 (Giraffe Image Spanning Two Rows) */}
                        <div className="col-span-1 row-span-1">
                            <Image src={six} alt="Giraffe" className="object-cover w-full h-[500px] rounded-lg" />
                        </div>
                        {/* Column 3 */}
                        <div className="space-y-1">
                            <Image src={one} alt="Field" className="object-cover w-full h-[250px] rounded-lg" />
                            <Image src={valley} alt="Valley" className="object-cover w-full h-[250px] rounded-lg" />
                        </div>
                        {/* Column 4 */}
                        <div className="space-y-1 md:hidden lg:block">
                            <Image src={lakeview} alt="Lake View" className="object-cover w-full h-[250px] rounded-lg" />
                            <div className="flex space-x-2">
                                <Image src={two} alt="Hut" className="object-cover w-[48%] h-[250px] rounded-lg" />
                                <Image src={eight} alt="Canoeing" className="object-cover w-[48%] h-[250px] rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Page;
