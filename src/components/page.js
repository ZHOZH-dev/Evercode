import React, { useEffect, useState } from 'react'
import Header from './header/header'
import MapSection from './map-section'
import Sendback from './sendback'
import Footer from './footer/footer'
import PopupMenu from './popup'

function Page() {
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

export default Page
