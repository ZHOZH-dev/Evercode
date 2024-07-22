import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import MapSection from './MapSection'
import Sendback from './Sendback'
import Footer from './footer/Footer'
import PopupMenu from './PopupMenu'

function App() {
	const [isClicked, setClicked] = useState(false)

	useEffect(() => {
		{
			isClicked
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto')
		}
	}, [isClicked])

	const clickMenubar = () => {
		setClicked(!isClicked)
	}

	return (
		<div className='main_container'>
			{isClicked && <PopupMenu clickMenubar={clickMenubar} />}
			<div
				className='sections'
				style={{
					opacity: isClicked ? '0.4' : '1',
				}}
			>
				<Header clickMenubar={clickMenubar} />
				<MapSection />
				<Sendback />
				<Footer />
			</div>
		</div>
	)
}

export default App
