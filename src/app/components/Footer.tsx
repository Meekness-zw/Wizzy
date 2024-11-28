import React from 'react';
import Image from 'next/image';
import arrow from './../../../public/arrow.svg';
import logo from './../../../public/Logo.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-[#304F47] text-white">
      <div className="ml-5 lg:grid lg:grid-cols-2">
        <div className="lg:mt-1">
          <h2 className="font-bold text-3xl w-[95%] md-[40%] pb-5 lg:pb-9 md:text-5xl lg:text-4xl">
            If you have any question, let us help you!
          </h2>
          <p className="lg:w-[80%]">
            If you have any questions or would like to book a tour with us, please do not hesitate to contact us.
          </p>
          <div className="mt-5 w-[80%] text-lg font-thin lg:mt-10 xl:mt-5">
            <ul className="mt-5 gap-3 mb-5">
              <li>Phone: +263 71 899 7246</li>
              <li>Email: info@rwandatourism.com</li>
              <li>Address: Kigali, Rwanda</li>
            </ul>
          </div>
          <div>
            <span className="font-extrabold">Subscribe to our newsletter</span>
            <div className="flex items-center gap-5 mt-3">
              <input
                type="email"
                placeholder="Input your email here"
                className="p-5 rounded-[10px] text-black"
              />
              <button className="bg-[#C7923E] p-5 rounded-[10px]">
                <Image src={arrow} alt="arrow icon" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex mt-5 lg:gap-20 lg:mt-1">
            <Image src={logo} alt="Logo" className="rounded-[60%] hidden lg:block" />
            <div className="flex justify-center items-center">
              <div className="flex gap-4">
                <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-white">
                  <FaFacebook className="text-2xl" />
                </div>
                <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-white">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div className="p-3 flex justify-center items-center border-[1px] rounded-[50%] border-white">
                  <FaInstagram className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5 font-thin w-[90%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="lg:mt-10">
            <div className="font-thin text-white grid grid-cols-2 mt-5 gap-2 md:grid-cols-3">
              <Link href="#">Home</Link>
              <Link href="#">Testimonial</Link>
              <Link href="#">Destination</Link>
              <Link href="#">Sign In</Link>
              <Link href="#">About Us</Link>
              <Link href="#">Packages</Link>
              <Link href="#">Gallery</Link>
              <Link href="#">Events</Link>
              <Link href="#">Our Team</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ml-0 pt-10 lg:w-[200%] mb-5">
          <p className="font-thin block">Copyright Africa Wizzy Safari 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
