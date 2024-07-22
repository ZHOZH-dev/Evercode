import React from 'react'

const MapSection = () => {
	return (
		<section className='office'>
			<div className='container'>
				<div className='office_content'>
					<div className='office_title'>
						<h1>
							Основной <br /> клиентский офис
						</h1>
					</div>
					<div className='office_slogan'>
						Экспертиза во всех областях разработки
					</div>
					<div className='office_contacts'>
						<div className='office_contacts_container'>
							<div className='office_contact'>
								<span className='office_contact_title phone'>ТЕЛЕФОН</span>
								<div className='office_contact_text'>
									<a>+7 921 093-03-80</a>
								</div>
							</div>
							<div className='office_contact'>
								<span className='office_contact_title mail'>ПОЧТА</span>
								<div className='office_contact_text'>
									<a>hello@evercodelab.com</a>
								</div>
							</div>
						</div>
						<div className='office_contact'>
							<span className='office_contact_title adress'>АДРЕС</span>
							<div className='office_contact_text'>
								ул Степана Разина,
								<br />
								д. 8а, литера А, помещ. 13-Н
								<br />
								Санкт-Петербург,
								<br />
								Россия, 191186
							</div>
						</div>
					</div>
				</div>
				<div className='map'>
					<iframe
						className='ymap'
						src='https://yandex.ru/map-widget/v1/?um=constructor%3Afa6577fe71b77662d1e8573e684bbdf691c0bdbf496ace52deff19a21e47fd48&amp;source=constructor'
						frameBorder='0'
					></iframe>
				</div>
			</div>
		</section>
	)
}

export default MapSection
