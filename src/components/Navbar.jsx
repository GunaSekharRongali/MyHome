import React, { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar flex items-center justify-between w-[100%] fixed top-0 left-0 right-0 shadow-md bg-white z-10">
      {/* Dropdown button with arrow (only visible on mobile) */}
      <div>
        <img className='w-[35px] h-[35px] md:w-[45px] md:h-[45px] ml-[5px]' src="src\components\makerble-mini-logo.png" alt="" />
      </div>
      <div className="relative">
        {isMobile && (
          <span onClick={() => setArrowDown(!arrowDown)}>
            {arrowDown ? (
              <ArrowDropUpIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
            ) : (
              <ArrowDropDownIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
            )}
          </span>
        )}
        {/* Dropdown content */}
        {(arrowDown || !isMobile) && (
          <ul className={`absolute ${!isMobile && 'md:static'} text-md text-bold left-0 top-[40px] md:top-0 bg-white shadow-md md:shadow-none md:flex w-[100px] md:w-[200px] z-30`}>
            <li className="hover:bg-[#e9e9e9] p-[6px] cursor-pointer">My Apps</li>
            <li className="hover:bg-[#e9e9e9] p-[6px] cursor-pointer">Home</li>
            <li className="hover:bg-[#e9e9e9] p-[6px] cursor-pointer">Explore</li>
          </ul>
        )}
      </div>

      {/* Icons and other nav items */}
      <ul className="flex items-center justify-end w-[70%] gap-0 sm:gap-[5px] md:gap-[20px] xl:gap-[25px] bg-white">
        <li className='rounded-full p-2 hover:bg-[#e9e9e9]'>
          <ShoppingCartOutlinedIcon titleAccess="Explore" sx={{ fontSize: 30, cursor: 'pointer' }} />
        </li>
        <li className='rounded-full p-2 hover:bg-[#e9e9e9]'>
          <EmailOutlinedIcon titleAccess="Contact" sx={{ fontSize: 30, cursor: 'pointer' }} />
        </li>
        <li className='rounded-full p-2 hover:bg-[#e9e9e9]'>
          <NotificationsNoneOutlinedIcon titleAccess="Notifications" sx={{ fontSize: 30, cursor: 'pointer' }} />
        </li>
        <li className="hidden sm:inline w-[35px] h-[35px] cursor-pointer">
          <img src="src/components/makerable.png" alt="" />
        </li>
        <li>
          <button className="md:text-center md:flex md:gap-2 text-black rounded-full md:text-white text-lg items-center hover:bg-[#e9e9e9] md:bg-[#ef4444] text-white md:rounded-lg p-2">
            <AddCircleOutlineOutlinedIcon titleAccess="Create" sx={{ fontSize: 30, cursor: 'pointer' }} />
            <span className="hidden lg:inline">Create</span>
          </button>
        </li>
        <li>
          <button className="flex gap-2 text-lg items-center hover:bg-[#2563eb] hover:text-white rounded-lg p-2 border-2 hover:border-indigo-900">
            <StarBorderOutlinedIcon titleAccess="Upgrade" />
            <span className="hidden lg:inline">Upgrade</span>
          </button>
        </li>
        <li onClick={() => setMenu(!menu)}>
          <ListOutlinedIcon sx={{ fontSize: 60, cursor: 'pointer' }} />
          {menu && (
            <div className="py-1 absolute right-[70px] bg-white shadow-md z-10" role="none">
              <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-[#ddd]" role="menuitem" tabIndex="-1" id="menu-item-0">
                Account settings
              </a>
              <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-[#ddd]" role="menuitem" tabIndex="-1" id="menu-item-1">
                Support
              </a>
              <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-[#ddd]" role="menuitem" tabIndex="-1" id="menu-item-2">
                License
              </a>
              <form method="POST" action="#" role="none">
                <button type="submit" className="block w-full px-4 py-2 text-left text-md text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">
                  Sign out
                </button>
              </form>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
