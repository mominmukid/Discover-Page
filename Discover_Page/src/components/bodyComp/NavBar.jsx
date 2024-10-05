import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import { FaBrain } from 'react-icons/fa';
import { CiDollar } from "react-icons/ci";
import { MdOutlineColorLens } from "react-icons/md";
import { CiMedal } from "react-icons/ci";
import { FaTv } from "react-icons/fa";

function NavBar() {

  const navItem = [
    {
      id: 1,
      name: "Top",
      icon: <CiStar />,
      path: 'top'
    },
    {
      id: 2,
      name: "Tech & Science",
      icon: <FaBrain />,
      path: '/tech&science'
    },
    {
      id: 3,
      name: "Finance",
      icon: <CiDollar />,
      path: '/finance'
    },
    {
      id: 4,
      name: "Arts & Culture",
      icon: <MdOutlineColorLens />,
      path: '/arts&culture'
    },
    {
      id: 5,
      name: "Soprts",
      icon: <CiMedal />,
      path: '/soprts'
    },
    {
      id: 6,
      name: "Entertainment",
      icon: <FaTv />,
      path: '/entertainment'
    },
  ]

  return (
    <>
    <nav className='w-[100%] bg-[#191a1a] text-white p-3 sticky top-0 z-50 overflow-hidden'>
      <ul className='flex justify-between text-sm  overflow-x-auto whitespace-nowrap hide-scrollbar '>
        {
          navItem.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path}
                className={({ isActive }) => ` flex justify-center items-center gap-1 hover:text-gray-400 font-semibold px-5 py-2.5 rounded-md
                ${isActive ? 'bg-[#1a2b2d]' : 'bg-[#191a1a]'}
                ${isActive ? 'text-[#1faec2]' : 'text-[#e8e8e6]'}
                `}>
                <span className='text-[1rem]'> {item.icon}</span> <p>{item.name}</p>

              </NavLink>



            </li>
          ))
        }

      </ul>
    </nav>

    </>
  )
}

export default NavBar

