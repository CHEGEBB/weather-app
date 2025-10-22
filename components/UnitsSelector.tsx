'use client';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

function UnitsSelector() {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <div className=''>
        <div className="toggle-button flex flex-row  p-2 border-2 border-[#aeaeb7] gap-2 rounded-[10px] cursor-pointer " onClick={handleToggleMenu}>
            <div className="gearcon align-center justify-center flex">
                <Image
                src="/assets/images/icon-units.svg"
                alt="Settings Gear"
                width={15}
                height={15}
                />
            </div>
            <div className="units">
                <p>
                    Units
                </p>
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
            <div className="menu absolute top-20 right-10 mt-2 bg-[#272541] rounded shadow-lg">
              <div className="switch-button">
                <button className='border border-amber-50'>
                    Switch to Imperial
                </button>
              </div>
             <div className="temperature">
                <p>
                    Temperature
                </p>
                <div className="celcius">
                <button>
                    Celcius(°C)
                </button>
                </div>
               <div className="farenheit">
                <button>
                    Farenheit(°F)
                </button>
               </div>
             </div>
             <div className="wind-speed">
                <p>
                    Wind Speed
                </p>
                <div className="kmph">
                <button>
                    Km/h
                </button>
                </div>
               <div className="mph">
                <button>
                    Mph
                </button>
               </div>
             </div>
             <div className="precipitation">
                <p>
                    Precipitation
                </p>
                <div className="mm">
                <button>
                    Millimeters(mm)
                </button>
                </div>
               <div className="inches">
                <button>
                    Inches(in)
                </button>
               </div>
             </div>
            </div>
        )

        }
      
    </div>
  )
}

export default UnitsSelector
