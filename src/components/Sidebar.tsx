import React from 'react'
import SidebarIcon from './SidebarIcon'
import { FaFire, FaPoo } from 'react-icons/fa'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
const Sidebar = () => {
  return (
	<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
		<SidebarIcon text='Fire!' icon={<FaFire size={28} />} />
		<SidebarIcon text= 'Add me!' icon={<BsPlus size={32} />} />
		<SidebarIcon icon={<BsFillLightningFill size={20} />} />
		<SidebarIcon icon={<FaPoo size={20} />} />
	</div>
  )
}

export default Sidebar