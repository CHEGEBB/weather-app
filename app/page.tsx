'use client';
import UnitsSelector from '@/components/UnitsSelector';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';


function WeatherPage() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const hourlyOptions = [
    {
      index:1,
      time:'3 PM',
      temperature:'20°',
      icon:'/assets/images/icon-overcast.webp'
    },
    {
      index:2,
      time:'4 PM',
      temperature:'20°',
      icon:'/assets/images/icon-partly-cloudy.webp'
    },
    {
      index:3,
      time:'5 PM',
      temperature:'20°',
      icon:'/assets/images/icon-sunny.webp'
    },
    {
      index:4,
      time:'6 PM',
      temperature:'19°',
      icon:'/assets/images/icon-overcast.webp'
    },
    {
      index:5,
      time:'7 PM',
      temperature:'18°',
      icon:'/assets/images/icon-snow.webp'
    },
    {
      index:6,
      time:'8 PM',
      temperature:'18°',
      icon:'/assets/images/icon-fog.webp'
    },
    {
      index:7,
      time:'9 PM',
      temperature:'17°',
      icon:'/assets/images/icon-snow.webp'
    },
    {
      index:8,
      time:'10 PM',
      temperature:'17°',
      icon:'/assets/images/icon-overcast.webp'
    }
  ]

  const options = [
    {
      index:1,
      day:'Tue',
      weather:'rain',
      high:'20°',
      low:'14°',
      icon:'/assets/images/icon-rain.webp'
    },
    {
      index:2,
      day:'Wed',
      weather:'drizzle',
      high:'21°',
      low:'15°',
      icon:'/assets/images/icon-drizzle.webp'
    },
    {
      index:3,
      day:'Thu',
      weather:'sunny',
      high:'24°',
      low:'14°',
      icon:'/assets/images/icon-sunny.webp'
    },
    {
      index:4,
      day:'Fri',
      weather:'partly-cloudy',
      high:'25°',
      low:'13°',
      icon:'/assets/images/icon-partly-cloudy.webp'
    },
    {
      index:5,
      day:'Sat',
      weather:'storm',
      high:'25°',
      low:'16°',
      icon:'/assets/images/icon-storm.webp'
    },
    {
      index:6,
      day:'Sun',
      weather:'snowy',
      high:'24°',
      low:'15°',
      icon:'/assets/images/icon-snow.webp'
    }

  ]
  return (
    <div className='bg-[#03012d] align-center flex flex-column justify-center min-h-screen'>
    <div className="main-content">
    <div className="topbar flex flex-row justify-between bg-red-30 min-w-screen h-20 align-center p-8">
      <div className="logo-left">
        <Image
        src="/assets/images/logo.svg"
        alt="Weather Logo"
        width={200}
        height={200}
        />
      </div>
      <div className="units-selector">
      <UnitsSelector/>
      </div>
    </div>
    <div className="container flex flex-col justify-center align-center min-w-screen ">
    <div className="content flex flex-col justify-center align-center min-w-screen gap-16 mt-18">
      <div className="text-sky">
      <h1 className='text-white text-5xl font-bold text-center'>How&apos;s the sky looking today?</h1>
      </div>
      <div className="flex justify-center items-center gap-4 mt-5">
  <div className="relative w-[350px]">
 
    <Image
      src="/assets/images/icon-search.svg"
      alt="Search Icon"
      width={20}
      height={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
      type="text"
      placeholder="Search for a place..."
      className="w-full pl-12 pr-4 py-3 bg-[#312f4b] text-white rounded-lg outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#4455da] transition"
    />
  </div>


  <button className="bg-[#4455da] hover:bg-[#5b6bff] transition text-white font-medium rounded-lg px-6 py-3">
    Search
  </button>
</div>

    
    
    </div>
    <div className="cards flex flex-row gap-6 justify-center align-center min-w-screen p-4 mt-12">
        <div className="left-cards">
        <div className="place-card flex flex-row justify-center align-center  w-full max-w-[700px] h-[250px] bg-cover bg-center bg-no-repeat rounded-xl
                bg-[url('/assets/images/bg-today-small.svg')] 
                md:bg-[url('/assets/images/bg-today-large.svg')]">
          <div className="current-data flex flex-col justify-center align-center p-8 text-white">
            <h1 className='text-4xl font-bold'>Berlin, Germany</h1>
            <p className='text-2xl mt-2'>Tuesday, Aug 5, 2025</p>
            </div>
          <div className="temperature-data  flex flex-row justify-center align-center  p-8 text-white">
            <div className="temp-flex flex flex-col justify-center align-center">
            <Image
              src="/assets/images/icon-sunny.webp"
              alt="Cloudy Icon"
              width={100}
              height={100}
              />
              </div>
            <p className='text-8xl italic font-bold mt-4 flex flex-col justify-center align-center'>20°</p>
            </div>
    
</div>
          <div className="weather-cards flex flex-row gap-3 mt-14">
            <div className="feels card w-36 h-24 bg-[#312f4b] rounded-lg p-4">
              <p className='text-[#aeaeb7] text-left'>
                Feels Like
              </p>
              <p className='text-[#ffffff] text-left  text-2xl mt-2'>18°</p>
            </div>
            <div className="humidity card card w-36 h-24 p-4 bg-[#312f4b] rounded-lg">
              <p className='text-[#aeaeb7] text-left '>
                Humidity
              </p>
              <p className='text-[#ffffff] text-left  text-2xl mt-2' >46%</p>
          </div>
            <div className="wind card card w-36 h-24 p-4 bg-[#312f4b] rounded-lg">
              <p className='text-[#aeaeb7] text-left '>
                Wind Speed
              </p>
              <p className='text-[#ffffff] text-left  text-2xl mt-2'>14 km/h</p>
            </div>
            <div className="precipitation-card card p-4 w-36 h-24 bg-[#312f4b] rounded-lg">
              <p className='text-[#aeaeb7] text-left '>
                Precipitation
              </p>
              <p className='text-[#ffffff] text-left  text-2xl mt-2'>0 mm</p>
            </div>
          </div>

          <div className="forecast-cards">
            <p className='text-white text-2xl font-bold mt-14 mb-4'>Daily Forecast</p>
            <div className="cards-forecast flex flex-row">
              {options.map((option) => (
                <div key={option.index} className="forecast-card flex flex-col justify-center align-center bg-[#312f4b] rounded-lg p-4 m-2 w-24 h-40">
                  <p className='text-white text-lg text-center font-bold'>{option.day}</p>
                  <Image
                    src={option.icon}
                    alt={`${option.weather} icon`}
                    width={50}
                    height={50}
                    className='flex justify-center align-center mt-2 ml-[10px]'
                  />
                  <div className="temps flex flex-row gap-6">
                  <p className='text-white  text-md mt-2'>{option.high}</p>
                  <p className='text-white text-md mt-2'>{option.low}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-card bg-[#312f4b] p-2 rounded-xl w-96">
          <div className="details-card flex flex-row gap-2 justify-center align-center mt-4 mb-2">
            <div className="hourly flex  justify-center align-center mt-2">
          <p className='text-white text-xl font-bold mb-4'>Hourly Forecast</p>
          </div>
          <div className="pick-day">
            <select className='bg-[#3d3b5e] w-24 h-12 rounded-lg'>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>  
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
            </select>
          </div>
          
          </div>
          <div className="cards-hourly  pr-4">
            {hourlyOptions.map((option) => (
              <div key={option.index} className="hourly-card flex flex-row  justify-between align-center bg-[#3d3b5e] rounded-lg p-4 m-2 w-full h-[66px]">
                <div className="image-time flex flex-row  gap-2 justify-between align-center">
                <Image
                  src={option.icon}
                  alt="Weather Icon"
                  width={30}
                  height={30}
                />
                <p className='text-white text-lg text-center font-bold mt-[4px]'>{option.time}</p>
                </div>
                <p className='text-white  text-md mt-2'>{option.temperature}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>

    </div>
    </div>
  );
}

export default WeatherPage;
