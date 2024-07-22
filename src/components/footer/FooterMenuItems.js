import React from 'react'

const FooterMenuItems = name => {
	return (
		<div className='footer_menu_item'>
			<div className='footer_menu_title'>{name.title}</div>
			{name.footerMenuLinks.map((linkName, index) => (
				<div className='footer_menu_link' key={index}>
					<a>{linkName}</a>
				</div>
			))}
		</div>
	)
}

export default FooterMenuItems
