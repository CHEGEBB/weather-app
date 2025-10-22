'use client';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

function UnitsSelector() {
    const [showMenu, setShowMenu] = useState(false);
    
    // Track active selection for each category
    const [activeTemp, setActiveTemp] = useState('celsius'); // or 'fahrenheit'
    const [activeWind, setActiveWind] = useState('kmph'); // or 'mph'
    const [activePrecip, setActivePrecip] = useState('mm'); // or 'inches'

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }

   return (
    <div className=''>
        <div className="toggle-button flex flex-row p-2 border-2 border-[#aeaeb7] bg-[#272541] gap-2 rounded-[10px] cursor-pointer" onClick={handleToggleMenu}>
            <div className="gearcon align-center justify-center flex">
                <Image
                src="/assets/images/icon-units.svg"
                alt="Settings Gear"
                width={15}
                height={15}
                />
            </div>
            <div className="units">
                <p>Units</p>
            </div>
            <div className="dropdown align-center justify-center flex">
                <Image
                src="/assets/images/icon-dropdown.svg"
                alt="Dropdown Arrow"
                width={15}
                height={15}
                />
            </div>
        </div>
        
        {showMenu && (
            <div className="menu absolute top-20 right-10 mt-2 bg-[#272541] rounded-lg shadow-lg p-2 w-48">
              <div className="switch-button">
                <button className='border border-amber-50 p-2 text-left rounded-lg w-full'>
                    Switch to Imperial
                </button>
              </div>

             <div className="temperature">
                <p className='text-[#aeaeb7] ml-2'>Temperature</p>
                
                {/* Celsius button */}
                <div 
                    className={`celcius p-2 text-left rounded-lg flex justify-between items-center cursor-pointer ${
                        activeTemp === 'celsius' ? 'bg-[#312f4b]' : ''
                    }`}
                    onClick={() => setActiveTemp('celsius')}
                >
                    <button className=''>Celcius(°C)</button>
                    {activeTemp === 'celsius' && (
                        <Image
                            src="/assets/images/icon-checkmark.svg"
                            alt="Check"
                            width={15}
                            height={15}
                        />
                    )}
                </div>
                
                {/* Fahrenheit button */}
                <div 
                    className={`farenheit p-2 text-left rounded-lg flex justify-between items-center cursor-pointer ${
                        activeTemp === 'fahrenheit' ? 'bg-[#312f4b]' : ''
                    }`}
                    onClick={() => setActiveTemp('fahrenheit')}
                >
                    <button>Farenheit(°F)</button>
                    {activeTemp === 'fahrenheit' && (
                        <Image
                            src="/assets/images/icon-checkmark.svg"
                            alt="Check"
                            width={15}
                            height={15}
                        />
                    )}
                </div>
             </div>

             <div className="wind-speed">
                <p className='text-[#aeaeb7] ml-2'>Wind Speed</p>
                
                {/* km/h button */}
                <div 
                    className={`kmph p-2 text-left rounded-lg flex justify-between items-center cursor-pointer ${
                        activeWind === 'kmph' ? 'bg-[#312f4b]' : ''
                    }`}
                    onClick={() => setActiveWind('kmph')}
                >
                    <button>Km/h</button>
                    {activeWind === 'kmph' && (
                        <Image
                            src="/assets/images/icon-checkmark.svg"
                            alt="Check"
                            width={15}
                            height={15}
                        />
                    )}
                </div>
                
                {/* mph button */}
                <div 
                    className={`mph p-2 text-left rounded-lg flex justify-between items-center cursor-pointer ${
                        activeWind === 'mph' ? 'bg-[#312f4b]' : ''
                    }`}
                    onClick={() => setActiveWind('mph')}
                >
                    <button>Mph</button>
                    {activeWind === 'mph' && (
                        <Image
                            src="/assets/images/icon-checkmark.svg"
                            alt="Check"
                            width={15}
                            height={15}
                        />
                    )}
                </div>
             </div>

             <div className="precipitation">
                <p className='text-[#aeaeb7] ml-2' >Precipitation</p>
                
                {/* mm button */}
                <div 
                    className={`mm p-2 text-left rounded-lg flex justify-between items-center cursor-pointer ${
                        activePrecip === 'mm' ? 'bg-[#312f4b]' : ''
                    }`}
                    onClick={() => setActivePrecip('mm')}
                >
                    <button>Millimeters(mm)</button>
                    {activePrecip === 'mm' && (
                        <Image
                            src="/assets/images/icon-checkmark.svg"
                            alt="Check"
                            width={15}
                            height={15}
                        />
                    )}
                </div>
                
                {/* inches button */}
                <div 
                    className={`inches p-2 text-left rounded-lg flex justify-between items-center cursor-pointer ${
                        activePrecip === 'inches' ? 'bg-[#312f4b]' : ''
                    }`}
                    onClick={() => setActivePrecip('inches')}
                >
                    <button>Inches(in)</button>
                    {activePrecip === 'inches' && (
                        <Image
                            src="/assets/images/icon-checkmark.svg"
                            alt="Check"
                            width={15}
                            height={15}
                        />
                    )}
                </div>
             </div>
            </div>
        )}
    </div>
   )
}

export default UnitsSelector