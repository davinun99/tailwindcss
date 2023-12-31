import React from 'react'
type Props = {
	icon: any;
	text?: string;
};
const SidebarIcon = ({ icon, text = 'tooltip' }: Props) => (
	<div className="sidebar-icon group">
		{icon}
		<span className='sidebar-tooltip group-hover:scale-100'>
			{text}
		</span>
	</div>
)
export default SidebarIcon;
