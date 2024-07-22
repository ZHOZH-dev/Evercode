import React, { useRef } from 'react'
import useClickOutside from '../custom-hooks/useClickOutside'

const PopupMenu = props => {
	const menuRef = useRef(null)
	useClickOutside(menuRef, () => {
		props.clickMenubar()
	})

	return (
		<div className='popup_menu' ref={menuRef}>
			<div className='popup_menu_item'>
				<a>Домой</a>
			</div>
			<div className='popup_menu_item'>
				<a>Продукты</a>
			</div>
			<div className='popup_menu_item'>
				<a>Кейсы</a>
			</div>
			<div className='popup_menu_item'>
				<a>Карьера</a>
			</div>
			<div className='popup_menu_item'>
				<a>Блог</a>
			</div>
			<div className='popup_menu_item'>
				<a>Контакты</a>
			</div>
		</div>
	)
}

export default PopupMenu
