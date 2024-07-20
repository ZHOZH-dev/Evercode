import React from 'react'
import logo from '../../imgs/logo-header.svg'
import HeaderMenu from './header-menu'

const Header = props => {
	return (
		<header>
			<nav className='header_container'>
				<a id='logo_header'>
					<img src={logo} alt='Evercode labs'></img>
				</a>
				<HeaderMenu></HeaderMenu>
			</nav>
			<div
				className='header_menubar'
				onClick={() => props.clickMenubar()}
			></div>
		</header>
	)
}

export default Header
