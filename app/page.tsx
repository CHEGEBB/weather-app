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
  return (
    <div className='bg-[#03012d] align-center flex justify-center min-h-screen'>
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
    </div>
  );
}

export default WeatherPage;
