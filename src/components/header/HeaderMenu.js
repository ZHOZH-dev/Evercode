import React from 'react'
import DropMenuList from './DropMenuList'

const HeaderMenu = () => {
	return (
		<ul className='header_menu'>
			<li className='header_menu_item header_menu_relative'>
				ПРОДУКТЫ
				<ul className='drop_menu'>
					<DropMenuList
						itemList={[
							'Everchain White Label Wallet',
							'Evervault',
							'EverCourse',
							'Evercode Online Medic',
							'Marketplace Evermarket',
							'Everchain SDK',
						]}
					/>
				</ul>
			</li>
			<li className='header_menu_item header_menu_relative'>
				КЕЙСЫ
				<ul className='drop_menu'>
					<DropMenuList
						itemList={[
							'CRM Решения',
							'Системы Мониторинга',
							'Электронная коммерция',
							'Медицина',
							'Образование',
						]}
					/>
				</ul>
			</li>
			<li className='header_menu_item'>КАРЬЕРА</li>
			<li className='header_menu_item'>БЛОГ</li>
			<li className='header_menu_item'>КОНТАКТЫ</li>
		</ul>
	)
}

export default HeaderMenu
