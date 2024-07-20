import React from 'react'
import logo from '../../imgs/logo-footer.svg'
import FooterMenuItems from './footer-menu'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer_container'>
				<div className='footer_info'>
					<a className='footer_logo'>
						<img src={logo} alt='Evercode Lab'></img>
					</a>
					<div className='footer_info_item'>
						<a>Политика конфиденциальности</a>
					</div>
					<div className='footer_info_item'>
						<a>Правила использования сайта</a>
					</div>
					<div className='footer_info_item'>2013 - 2024 Evercode Lab</div>
				</div>
				<div className='footer_menu'>
					<FooterMenuItems
						title={'Меню'}
						footerMenuLinks={[
							'Продукты',
							'Кейсы',
							'Карьера',
							'Блог',
							'Контакты',
						]}
					/>
					<div>
						<FooterMenuItems
							title={'Контакты'}
							footerMenuLinks={['sales@evercodelab.com', 'job@evercodelab.com']}
						/>
						<div className='footer_menu_link'>191186, Россия</div>
						<div className='footer_menu_link'>Санкт-Петербург</div>
						<div className='footer_menu_link'>Ул Степана Разина, д.8а,</div>
						<div className='footer_menu_link'>Литера А, помещ. 13-Н</div>
					</div>
				</div>
				<div className='footer_socials'>
					<div className='footer_socials_title'>Связь</div>
					<div className='footer_socials_icons'>
						<a className='social_icon medium'></a>
						<a className='social_icon gh'></a>
						<a className='social_icon tweet'></a>
						<a className='social_icon fb'></a>
						<a className='social_icon in'></a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
