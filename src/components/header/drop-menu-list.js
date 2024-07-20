import React from 'react'

const DropMenuList = props => {
	return props.itemList.map((el, index) => {
		return (
			<li key={index} className='drop_menu_item'>
				{el}
			</li>
		)
	})
}

export default DropMenuList
