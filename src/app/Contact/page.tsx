'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import contact from './../../../public/contact.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

function page() {
    const [countryCodeVisible, setCountryCodeVisible] = useState(false);
    const [selectedCode, setSelectedCode] = useState('+250'); // Default country code (Rwanda)

    // List of country codes (simplified example)
    const countryCodes = [
        { code: '+1', name: 'USA' },
        { code: '+44', name: 'UK' },
        { code: '+250', name: 'Rwanda' },
        { code: '+91', name: 'India' },
        // Add more countries and codes as needed
    ];

    const toggleCountryCodeList = () => {
        setCountryCodeVisible((prevState) => !prevState);
    };

    const handleCodeSelection = (code) => {
        setSelectedCode(code);
        setCountryCodeVisible(false); // Close the dropdown once a code is selected
    };

    return (
        <div>
            <div className="relative flex justify-center items-center">
                <Image src={contact} alt="Gallery Background" className="object-cover w-full h-[300px] md:h-[600px]" />
                <h2 className="absolute text-white text-4xl font-bold md:text-8xl">Contact</h2>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 space-y-5">
                <h1 className="font-bold text-4xl">Get in Touch</h1>
                <p className="w-[60%] text-[#515151]">
                    We would love to hear from you! If you have any comments or suggestions about our website or our tours, please don't hesitate to get in touch. We are always looking for ways to improve and make your travel experience even better.
                </p>
            </div>

            <div className="flex justify-center items-center">
            <div className="grid flex-col md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10 gap-20 mb-10 w-[80%]">
                <div className="shadow-lg shadow-[#9A9AB0] rounded-[10px]">
                    <div className="space-y-3 p-5">
                        <h2 className="text-2xl font-bold">Social Media</h2>
                        <div className="flex">
                            <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-[#304F47]"><FaFacebook className="text-2xl text-[#304F47]" /></div>
                            <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-[#304F47]"><FaTwitter className="text-2xl text-[#304F47]" /></div>
                            <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-[#304F47]"><FaLinkedin className="text-2xl text-[#304F47]" /></div>
                            <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-[#304F47]"><FaInstagram className="text-2xl text-[#304F47]" /></div>
                        </div>
                    </div>
                </div>

                <div className="shadow-lg shadow-[#9A9AB0] rounded-[10px]">
                    <div className="space-y-3 p-5 pr-10">
                        <h2 className="text-2xl font-bold">Email & Phone</h2>
                        <div className="">
                            <span className="gap-3 flex items-center"> <FaPhone className="text-lg text-[#304F47]" /> +250 784 688 641</span>
                            <span className="gap-3 flex items-center"> <FaEnvelope className="text-lg text-[#304F47]" /> bbonteemma@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="shadow-lg shadow-[#9A9AB0] rounded-[10px]">
                    <div className="space-y-3 p-5 pr-32">
                        <h2 className="text-2xl font-bold">Address</h2>
                        <div className="">
                            <p className="text-[#304F47]">kk 600 st  <br />Kigali, Rwanda</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="border-[1px] border-[#E1E1E1] rounded-[10px] w-[90%] md:w-[72%] p-10 mb-20">
                    <h2 className="text-2xl font-bold mb-5">Contact us</h2>
                    <div className="flex flex-col lg:flex-row lg:gap-20 mb-5">
                        <span className=""><h3 className="font-bold">First Name</h3> <input type="text" placeholder="Input your first name...." className="border-[1px] border-[#E1E1E1] p-3 pr-20 rounded-[10px]" /></span>
                        <span><h3 className="font-bold">Last Name</h3> <input type="text" placeholder="Input your last name...." className="border-[1px] border-[#E1E1E1] p-3 pr-20 rounded-[10px]" /></span>
                    </div>
                    <div className="">
                        <span className=""><h3 className="font-bold">Email</h3> <input type="email" placeholder="Input your email...." className="border-[1px] border-[#E1E1E1] p-3 pr-20 lg:pr-[435px] rounded-[10px]" /></span> 
                        <span className="">
                            <h3 className="font-bold">Phone Number</h3>
                            <div className="relative flex  items-center">
                                {/* Button to toggle country code list */}
                                <button
                                    type="button"
                                    onClick={toggleCountryCodeList}
                                    className="border-[1px] border-[#E1E1E1] p-3 pr-0 md:pr-10 rounded-[10px] flex items-center gap-2"
                                >
                                    {selectedCode}
                                    <span className="text-sm">▼</span>
                                </button>

                                {/* Country Code Dropdown (only visible when countryCodeVisible is true) */}
                                {countryCodeVisible && (
                                    <div className="absolute z-10 mt-2 bg-white border border-[#E1E1E1] rounded-[10px] shadow-lg w-full max-h-60 overflow-y-auto">
                                        <ul>
                                            {countryCodes.map((country, index) => (
                                                <li 
                                                   key={index} 
                                                    onClick={()=> handleCodeSelection(country.code)} 
                                                    className="cursor-pointer hover:bg-gray-100 p-2"
                                                >
                                                    {country.name} ({country.code})
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Phone number input */}
                                <input
                                    type="number"
                                    placeholder="Input your phone...."
                                    className="border-[1px] border-[#E1E1E1] p-3 pr-0 md:pr-20  rounded-[10px] ml-2"
                                />
                            </div>
                        </span>
                        <span><h3 className="font-bold">Message</h3><textarea name="text" id="" placeholder="write a message" className="border-[1px] border-[#E1E1E1] rounded-[10px] pr-24 p-3 md:pr-[300px] lg:pr-[450px] pb-[200px]"></textarea></span>
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default page;
