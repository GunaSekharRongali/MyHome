import React from 'react';
import { Link } from 'react-router-dom';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import AlbumIcon from '@mui/icons-material/Album';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import EventIcon from '@mui/icons-material/Event';

const Sidebar = () => {
  return (
    <div className="sidebar flex align-center justify-center bg-white md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/6 fixed top-[61px] left-0 shadow-lg z-10">
      <ul className='flex flex-col justify-center px-4 py-2 gap-2 text-lg font-semibold'>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/" title="Newsfeed" className="flex items-center gap-2">
            <FeedOutlinedIcon />
            <span className="hidden md:inline">Newsfeed</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/contacts" title="Contacts" className="flex items-center gap-2">
            <ContactsOutlinedIcon />
            <span className="hidden md:inline">Contacts</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/projects" title="Projects" className="flex items-center gap-2">
            <DeveloperBoardIcon />
            <span className="hidden md:inline">Projects</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/albums" title="Albums" className="flex items-center gap-2">
            <AlbumIcon />
            <span className="hidden md:inline">Albums</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/organizations" title="Organizations" className="flex items-center gap-2">
            <CorporateFareIcon />
            <span className="hidden md:inline">Organizations</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/boards" title="Boards" className="flex items-center gap-2">
            <DashboardIcon />
            <span className="hidden md:inline">Boards</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/progress" title="Progress" className="flex items-center gap-2">
            <DonutLargeIcon />
            <span className="hidden md:inline">Progress</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/followers" title="Followers" className="flex items-center gap-2">
            <PeopleOutlineIcon />
            <span className="hidden md:inline">Followers</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/following" title="Following" className="flex items-center gap-2">
            <PersonAddAltIcon />
            <span className="hidden md:inline">Following</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/events" title="Events" className="flex items-center gap-2">
            <EventIcon />
            <span className="hidden md:inline">Events</span>
          </Link>
        </li>
        <li className='hover:bg-gray-200 rounded-lg flex gap-3 p-2'>
          <Link to="/todo" title="To-Do" className="flex items-center gap-2">
            <AddTaskIcon />
            <span className="hidden md:inline">To-Do</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
