import React, { useRef, useState } from 'react'
import useClickWhere from './custom-hooks/useClickAnywhere'

const Sendback = () => {
	const [isChecked, setCheсked] = useState(false)
	const [display, setDisplay] = useState('none')
	const menuRef = useRef(null)

	useClickWhere(menuRef, () => {
		setDisplay('none')
	})

	const PopupWindow = warningMessage => {
		if (!isChecked) {
			return (
				<div
					className='warning_message'
					style={{ display: display }}
					ref={menuRef}
				>
					<span>{warningMessage.message}</span>
				</div>
			)
		}
	}

	return (
		<section className='sendback'>
			<div className='sendback_container'>
				<div className='sendback_title'>Пишите нам</div>
				<div className='sendback_form'>
					<textarea
						className='sendback_input'
						placeholder='Ваш текст'
					></textarea>
					<input
						className='sendback_input'
						placeholder='Ваша почта'
						type='email'
					></input>
					<div className='contacts_checkbox'>
						<div className='checkbox_container'>
							<input
								type='checkbox'
								className='checkbox'
								onClick={() => setCheсked(!isChecked)}
							></input>
							<p className='checkbox_text'>
								Я прочитал(а) и ознакомлен(а) с&nbsp;
								<a className='checkbox_link'>
									Политикой конфиденциальности
								</a>{' '}
								и&nbsp;
								<a className='checkbox_link'>Правилами использования сайта</a>
							</p>
							<PopupWindow
								message={'Чтобы продолжить, установите этот флажок.'}
							/>
						</div>
						<button
							className='contact-button'
							type='submit'
							onClick={() => setDisplay('block')}
						>
							ОТПРАВИТЬ
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Sendback
