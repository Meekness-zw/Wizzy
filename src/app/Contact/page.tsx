'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import contact from './../../../public/contact.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactPage() {
    const [countryCodeVisible, setCountryCodeVisible] = useState(false);
    const [selectedCode, setSelectedCode] = useState('+250'); // Default country code (Rwanda)

    // List of country codes (simplified example)
    const countryCodes = [
        { code: '+1', name: 'USA' },
        { code: '+44', name: 'UK' },
        { code: '+250', name: 'Rwanda' },
        { code: '+91', name: 'India' },
    ];

    // Toggle the visibility of the country code dropdown
    const toggleCountryCodeList = () => {
        setCountryCodeVisible((prevState) => !prevState);
    };

    // Handle country code selection
    const handleCodeSelection = (code: string) => {
        setSelectedCode(code);
        setCountryCodeVisible(false); // Close dropdown after selection
    };

    return (
        <div>
            {/* Header Section */}
            <div className="relative flex justify-center items-center">
                <Image src={contact} alt="Gallery Background" className="object-cover w-full h-[300px] md:h-[600px]" />
                <h2 className="absolute text-white text-4xl font-bold md:text-8xl">Contact</h2>
            </div>

            {/* Introduction Section */}
            <div className="flex flex-col justify-center items-center mt-10 space-y-5">
                <h1 className="font-bold text-4xl">Get in Touch</h1>
                <p className="w-[80%] md:w-[60%] text-[#515151] text-center">
                    We would love to hear from you! If you have any comments or suggestions about our website or our tours, please don&#39;t hesitate to get in touch.
                </p>
            </div>

            {/* Contact Information Section */}
            <div className="flex justify-center items-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10 w-[80%]">
                    {/* Social Media */}
                    <div className="shadow-lg shadow-[#9A9AB0] rounded-[10px] p-5">
                        <h2 className="text-2xl font-bold mb-3">Social Media</h2>
                        <div className="flex gap-3">
                            <FaFacebook className="text-2xl text-[#304F47] cursor-pointer" />
                            <FaTwitter className="text-2xl text-[#304F47] cursor-pointer" />
                            <FaLinkedin className="text-2xl text-[#304F47] cursor-pointer" />
                            <FaInstagram className="text-2xl text-[#304F47] cursor-pointer" />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="shadow-lg shadow-[#9A9AB0] rounded-[10px] p-5">
                        <h2 className="text-2xl font-bold mb-3">Email & Phone</h2>
                        <p className="flex items-center gap-3">
                            <FaPhone className="text-lg text-[#304F47]" /> +250 784 688 641
                        </p>
                        <p className="flex items-center gap-3">
                            <FaEnvelope className="text-lg text-[#304F47]" /> bbonteemma@gmail.com
                        </p>
                    </div>

                    {/* Address */}
                    <div className="shadow-lg shadow-[#9A9AB0] rounded-[10px] p-5">
                        <h2 className="text-2xl font-bold mb-3">Address</h2>
                        <p className="text-[#304F47]">KK 600 St, Kigali, Rwanda</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center items-center">
                <div className="border-[1px] border-[#E1E1E1] rounded-[10px] w-[90%] md:w-[72%] p-10 mb-20">
                    <h2 className="text-2xl font-bold mb-5">Contact us</h2>

                    {/* Form Inputs */}
                    <div className="grid lg:grid-cols-2 gap-5 mb-5">
                        <div>
                            <h3 className="font-bold">First Name</h3>
                            <input
                                type="text"
                                placeholder="Input your first name..."
                                className="w-full border-[1px] border-[#E1E1E1] p-3 rounded-[10px]"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold">Last Name</h3>
                            <input
                                type="text"
                                placeholder="Input your last name..."
                                className="w-full border-[1px] border-[#E1E1E1] p-3 rounded-[10px]"
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <h3 className="font-bold">Email</h3>
                        <input
                            type="email"
                            placeholder="Input your email..."
                            className="w-full border-[1px] border-[#E1E1E1] p-3 rounded-[10px]"
                        />
                    </div>

                    <div className="mb-5">
                        <h3 className="font-bold">Phone Number</h3>
                        <div className="relative flex items-center gap-2">
                            {/* Country Code Selector */}
                            <button
                                type="button"
                                onClick={toggleCountryCodeList}
                                className="border-[1px] border-[#E1E1E1] p-3 rounded-[10px]"
                            >
                                {selectedCode} ▼
                            </button>
                            {countryCodeVisible && (
                                <ul className="absolute z-10 bg-white border border-[#E1E1E1] rounded-[10px] mt-2 w-40">
                                    {countryCodes.map((country, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleCodeSelection(country.code)}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {country.name} ({country.code})
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <input
                                type="number"
                                placeholder="Phone number"
                                className="w-full border-[1px] border-[#E1E1E1] p-3 rounded-[10px]"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold">Message</h3>
                        <textarea
                            placeholder="Write your message..."
                            className="w-full border-[1px] border-[#E1E1E1] p-3 rounded-[10px] h-40"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
