
import { useEffect, useRef } from 'react'
import styles from './modal.module.scss'


export default function Modal({openModal, setModal, children}: {
  children: React.ReactNode
  openModal: boolean
  setModal: (b: boolean) => void
}) {
	const ref = useRef<HTMLDialogElement>(null)
	useEffect(() => {
		if (openModal) {
			ref.current?.showModal()
		} else {
			ref.current?.close()
		}
	}, [openModal])

	let active = `${styles.active} ${styles.modal}`

	return (
		<dialog className={`${styles.modal} ${openModal ? active : ''}`} ref={ref}  onClick={() => setModal(false)}>
			<div className='relative flex space-x-2 max-w-[900px] w-full p-30 bg-revolver rounded-[20px] text-white' onClick={(e) => e.stopPropagation()}>
				{children}
				<button className='absolute top-5 right-10 text-radicalred font-bold text-[18px]'>&#9587;</button>
			</div>
		</dialog>
	)
}


