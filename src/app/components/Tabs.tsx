import React, { useState } from 'react';
import Reveiws from './../components/Reveiws';
import amandla from './../../../public/amandla.svg';
import jenna from './../../../public/jenna.svg';
import emma from './../../../public/emma.svg';
import meghan from './../../../public/meghan.svg';

function Page() {
    const [currentTab, setCurrentTab] = useState(0); // Current tab index

    // Review data
    const reviews = [
        { img: amandla, name: 'Amandala Stenburg', review: 'A once-in-a-lifetime experience! The activities were well organized, and the tour guide was passionate, making the trip even more special' },
        { img: jenna, name: 'Jenna Ortega', review: 'A once-in-a-lifetime experience! The activities were well organized, and the tour guide was passionate, making the trip even more special' },
        { img: emma, name: 'Emma Watson', review: "Incredible adventure! We had so much fun exploring beautiful landscapes, interacting with locals, and learning about Rwanda's culture and history" },
        { img: amandla, name: 'Amandla Stenburg', review: 'A once-in-a-lifetime experience! The activities were well organized, and the tour guide was passionate, making the trip even more special' },
        { img: meghan, name: 'Meghan Good', review: 'Such an unforgettable experience! The team was professional, the activities were exciting, and the natural beauty of Rwanda left me speechless.' },
        { img: emma, name: 'Emma Watson', review: 'An unforgettable journey! From hiking volcanoes to seeing wildlife up close, this trip exceeded all expectations. The guides were exceptional.' },
        { img: amandla, name: 'Amandala Stenburg', review: 'An unforgettable journey! From hiking volcanoes to seeing wildlife up close, this trip exceeded all expectations. The guides were exceptional' },
        { img: jenna, name: 'Jenna Ortega', review: 'Absolutely loved the adventure! The places we visited were stunning, and the guides made the experience informative, fun, and enriching.Breath taking' },
        { img: emma, name: 'Emma Watson', review: 'A once-in-a-lifetime experience! The activities were well organized, and the tour guide was passionate, making the trip even more special' },
    ];

    // Calculate the starting index for each tab
    const startIndex = currentTab * 3;
    const currentReviews = reviews.slice(startIndex, startIndex + 3);

    return (
        <div>
            {/* Reviews Section */}
            <div className='flex flex-col justify-center items-center mt-10 text-center'>
                <h1 className='text-[#C7923E] font-medium text-xl pb-5'>
                    Why Us?
                </h1>
                <h1 className='font-extrabold text-3xl'>
                    Why Travel with Africa Wizzy Safari
                </h1>
            </div>

            {/* Display Reviews */}
            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {currentReviews.map((review, index) => (
                        <Reveiws
                            key={index}
                            img={review.img}
                            name={review.name}
                            review={review.review}
                        />
                    ))}
                </div>
            </div>

            {/* Tab Bars for Navigation */}
            <div className="flex justify-center mt-5 space-x-4">
                {/* Loop over three bars */}
                {[0, 1, 2].map((tabIndex) => (
                    <div
                        key={tabIndex}
                        onClick={() => setCurrentTab(tabIndex)} // Set the tab when clicked
                        className={`w-12 h-2 rounded-full cursor-pointer transition-all duration-300 
              ${currentTab === tabIndex ? 'bg-[#C7923E]' : 'bg-[#304F47]'} `}
                    />
                ))}
            </div>
        </div>
    );
}

export default Page;
