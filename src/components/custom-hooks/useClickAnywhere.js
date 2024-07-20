import { useEffect } from 'react'

const useClickAnywhere = (ref, callback) => {
	const handleClick = () => {
		if (ref.current) {
			callback()
		}
	}
	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	})
}

export default useClickAnywhere
