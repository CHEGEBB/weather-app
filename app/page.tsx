'use client';
import UnitsSelector from '@/components/UnitsSelector';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import '@/sass/weather.scss';


function WeatherPage() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
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
    <div className="search flex justify-center align-center gap-5">
      <input
        type="text"
        placeholder="Search for a place..."
        className="p-4 rounded-lg bg-[#312f4b] w-110 outline-0"
      />
      <button className='bg-[#4455da] rounded-lg w-28'>
        Search 
      </button>
      
    
    </div>
    
    
    </div>
    <div className="cards flex flex-row justify-center align-center min-w-screen">
        <div className="left-cards">
          <div className="place-card w-[700px] h-[300px]">
            Berlin, Germany

          </div>
          <div className="weather-cards flex flex-row gap-3 ">
            <div className="feels card w-36 h-24 bg-red-400 rounded-lg">
              <p>
                Feels Like
              </p>
              <h2>18°</h2>
            </div>
            <div className="humidity card card w-36 h-24 bg-red-400 rounded-lg">
              <p>
                Humidity
              </p>
              <h2>46%</h2>
          </div>
            <div className="wind card card w-36 h-24 bg-red-400 rounded-lg">
              <p>
                Wind Speed
              </p>
              <h2>14 km/h</h2>
            </div>
            <div className="precipitation-card card w-36 h-24 bg-red-400 rounded-lg">
              <p>
                Precipitation
              </p>
              <h2>0 mm</h2>
            </div>
          </div>

          <div className="forecast-cards"></div>
        </div>
        <div className="right-card">
          <div className="details-card">
            Weather Details
          </div>

        </div>
      </div>
      </div>

    </div>
    </div>
  );
}

export default WeatherPage;
