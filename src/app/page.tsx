'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import hero1 from '../../public/Mobile-Hero.svg';
import giraffes from '../../public/girrafes.svg';
import free from '../../public/free.svg';
import giraffe from '../../public/giraffe.svg';
import lake from '../../public/lake.svg';
import hero2 from '../../public/zebra.jpg';
import hero3 from '../../public/elephant.jpg';
import Card from './components/Card';
import { useRouter } from 'next/navigation';
import Place from './components/Place';
import kigali from '../../public/kagali.svg';
import huye from '../../public/huye.svg';
import rubavu from '../../public/rubavu.svg';
import musanze from '../../public/musunze.svg';
import car from '../../public/car.svg';
import check from '../../public/check.svg';
import contact from '../../public/contact.svg';
import like from '../../public/like.svg';
import NewCards from './components/NewCards';
import Tabs from './components/Tabs';

// Import styles for the slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Page() {
  const [numGuests, setNumGuests] = useState(0);
  const [date, setDate] = useState('');
  const [packageOffer, setPackageOffer] = useState('');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // Default to 1 item per view
  const router = useRouter();

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // 3 items per view for large screens
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // 2 items per view for medium screens
      } else {
        setItemsPerView(1); // 1 item per view for small screens
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView); // Cleanup
  }, []);

  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setNumGuests(Number(e.target.value));
  };

  const handleBookNow = () => router.push('/signup');

  const placesData = [
    { imgData: kigali, imgAlt: 'Kigali', title: 'Kigali', description: 'Explore the vibrant capital city of Rwanda, known for its cleanliness, rich culture, and impressive architecture.' },
    { imgData: huye, imgAlt: 'Huye', title: 'Huye', description: 'A cultural hub of Rwanda, Huye is home to the National Museum of Rwanda.' },
    { imgData: rubavu, imgAlt: 'Rubavu', title: 'Rubavu', description: 'Located on the shores of Lake Kivu, Rubavu offers stunning lake views and opportunities for water sports.' },
    { imgData: musanze, imgAlt: 'Musanze', title: 'Musanze', description: 'Nestled near Volcanoes National Park, Musanze is the gateway to gorilla trekking.' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Only one image at a time for hero section
    slidesToScroll: 1,
    autoplay: true, // Automatic sliding
    autoplaySpeed: 5000, // Delay between slides (5 seconds)
    arrows: true, // Show navigation arrows
    nextArrow: <FaChevronRight className="text-white absolute right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" />,
    prevArrow: <FaChevronLeft className="text-white absolute left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" />,
  };

  return (
    <div className="font-primary">
      {/* Hero Image Slider */}
      <div className="relative h-screen overflow-hidden">
        <Slider {...sliderSettings}>
          <div className="relative h-screen">
            <Image src={hero1} alt="Hero Image 1" layout="fill" className="object-cover" />
          </div>
          <div className="relative h-screen">
            <Image src={hero2} alt="Hero Image 2" layout="fill" className="object-cover" />
          </div>
          <div className="relative h-screen">
            <Image src={hero3} alt="Hero Image 3" layout="fill" className="object-cover" />
          </div>
        </Slider>
      </div>

      {/* Hero Text and Search */}
      <div className="absolute top-28 lg:top-10 w-full space-x-10 xl:items-start overflow-hidden">
        <h1 className='text-[60px] font-semibold text-[#ffffff] w-[70%] ml-10 mt-24  md:text-[80px] md:mt-24 lg:mt-32'>Experience The Beauty Of Rwanda With Us</h1>
        <p className='text-white font-medium text-[20px] ml-10 md:text-[24px]'>Discover the Land of a Thousand Hills</p>
        <div className="">
          <div className="w-[100%] -ml-5 lg:ml-3 first-line lg:mt-10">
            <div className="bg-[#304F47] p-4 rounded-[10px] lg:w-[95%] w-[100%] xl:mt-[230px] lg:mt-[100px] flex flex-col lg:flex-row  gap-7 ">
              {/* Search Input */}
              <div className='flex items-center bg-white rounded-[10px] overflow-hidden mb-4 lg:w-[35%] md:p-5 lg:p-2'>
                <FaSearch className='text-[#9A9AB0] mx-2' />
                <input
                  type="text"
                  placeholder='Search Activities Or Destination'
                  className='p-2 w-full text-[#9A9AB0] bg-transparent border-none outline-none font-bold md:text-[20px]'
                />
              </div>
              {/* Inputs for Guests, Date, and Package */}
              <div className="hidden lg:flex lg:flex-row space-x-20 ">
                {/* Guests Dropdown */}
                <div className='flex items-center justify-center gap-3'>
                  <label className='text-[#9A9AB0] text-light '>Guests</label>
                  <select
                    value={numGuests}
                    onChange={handleGuestsChange}
                    className='rounded-[10px] bg-[#304F47] text-white w-full space-x-5'
                  >
                    <option value="0" className=""></option>
                    {Array.from({ length: 11 }, (_, num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Date Picker */}
                <div className='flex flex-col items-right justify-center lg:w-1/4'>
                  <label className='text-[#9A9AB0] text-light'>Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className=' bg-[#304F47] text-white  font-bold w-full'
                  />
                </div>
                {/* Package Offer */}
                <div className='flex flex-col items-right justify-center lg:w-1/4'>
                  <label className='text-[#9A9AB0] text-light'>Package</label>
                  <select
                    value={packageOffer}
                    onChange={(e) => setPackageOffer(e.target.value)}
                    className='rounded-[10px] bg-[#304F47] text-white appearance-none w-full'
                  >
                    <option value="">Select Package</option>
                    <option value="basic">Basic </option>
                    <option value="premium">Premium </option>
                    <option value="luxury">Luxury </option>
                  </select>
                </div>
              </div>
              <div className='flex items-center '>
                <button onClick={handleBookNow} className='pl-10 pr-10 pt-2 pb-2 rounded-[10px] bg-[#C7923E] text-white text-lg font-semibold transition-all duration-300 hover:bg-[#b78a30]'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-[#C7923E] font-medium text-3xl pb-6 lg:mt-20'>
          Choose Your Package
        </h1>
        <h1 className='font-medium text-3xl ml-5'>
          Select your Best Package for your Travel
        </h1>
      </div>

      <div className='ml-5 md:ml-10 xl:ml-0'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto'>
          <Card imgData={giraffes} imgAlt='Giraffes' title='Akagera National Park' description='Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.' button='Learn More' />
          <Card imgData={free} imgAlt='Free Activities' title='Free Activities' description='Explore free activities available in Akagera National Park and make the most of your visit.' button='Learn More' />
          <Card imgData={lake} imgAlt='Lake Kivu' title='Lake Kivu' description='Experience the beauty of Lake Kivu, perfect for relaxation and water activities.' button='Learn More' />
          <Card imgData={giraffe} imgAlt='Giraffe Sanctuary' title='Giraffe Sanctuary' description='Visit the Giraffe Sanctuary to learn about and feed these amazing animals.' button='Learn More' />
          <Card imgData={hero1} imgAlt='Scenic Views' title='Scenic Views' description='Discover stunning views and landscapes throughout Rwanda.' button='Learn More' />
          <Card imgData={lake} imgAlt='Adventure on Water' title='Adventure on Water' description='Join exciting water adventures on the lakes of Rwanda.' button='Learn More' />
        </div>
      </div>

      {/* Places Carousel */}
      <div className="relative mt-10">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setScrollIndex(scrollIndex - 1)}
            disabled={scrollIndex === 0}
            className={`flex items-center border border-[#C7923E] p-3 rounded-l ${scrollIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#C7923E] hover:text-white'} text-[#C7923E] mr-2`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => setScrollIndex(scrollIndex + 1)}
            disabled={scrollIndex >= placesData.length - itemsPerView}
            className={`flex items-center border border-[#C7923E] p-3 rounded-r ${scrollIndex >= placesData.length - itemsPerView ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#C7923E] hover:text-white'} text-[#C7923E]`}
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${scrollIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {placesData.map((place, index) => (
              <div
                key={index}
                className={`flex-none ${itemsPerView === 1 ? 'w-full' : itemsPerView === 2 ? 'w-1/2' : 'w-1/3'}`}
              >
                <Place imgData={place.imgData} imgAlt={place.imgAlt} title={place.title} description={place.description} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-10 text-center'>
        <h1 className='text-[#C7923E] font-medium text-xl pb-5'>
          Why Us ?
        </h1>
        <h1 className='font-extrabold text-3xl'>
          Why Travel with Africa Wizzy Safari
        </h1>
      </div>

      <div className='flex items-center justify-center'>
        <div className="grid items-center justify-center lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10 md:gap-20 lg:ml-3 xl:ml-0">
          <NewCards imgData={car} imgAlt='car' description='100+ tours around Rwanda' />
          <NewCards imgData={check} imgAlt='check' description='100% Trusted travel agency' />
          <NewCards imgData={contact} imgAlt='contact' description='10 years of travel experience' />
          <NewCards imgData={like} imgAlt='like' description='90% of travelers are happy' />
        </div>
      </div>
      <div className="mb-10 mt-10 flex justify-center items-center">
        <div className="w-[90%]">
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default Page;





