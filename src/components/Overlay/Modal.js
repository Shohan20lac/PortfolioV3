import { motion } from "framer-motion"
import Backdrop   from './Backdrop'
import {useState} from 'react'


function LinkToSocial
	({ modalContent, handleClose }) {	
	const [textCopied, setTextCopied] = useState(false);

	const dropIn = {
		hidden: {
			y: "-100vh",
			opacity: 0
		},
		visible: {
			y: "0",
			opacity: 1,
			transition: {
				duration: 0.01,
				type: "spring",
				damping: 50,
				stiffness: 600,
			}
		},
		exit: {
			y: "100vh",
			opacity: 0
		}
	}

	return (
		<Backdrop onClick={handleClose}>

			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="modal orange-gradient"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>

				<div className="row">
					<div className="column modal-left">
						<img
							className="modal-image"
							src={modalContent.imageUrl}
							alt="Shohan"
						/>
					</div>

					<div className="column modal-right">
						<p className="modal-text">  {modalContent.websiteUrl}</p>
						<button
							className="mech-button"
							onClick={() => {
								navigator.clipboard.writeText(`${modalContent.websiteUrl}`);
								setTextCopied(true);
							}}
						>
							<span>
								{textCopied ? `Copied to Clipboard` : `Copy to Clipboard`}
							</span>
							<i></i>
						</button>
					</div>

				</div>



			</motion.div>


		</Backdrop>

	);
}

function ExperienceDetails({ content }) {
	

	return (
		<>
			
		</>
	);
}

const Modal = ({ modalType, handleClose, modalContent }) => {

	let content;

	if (modalType === "Socials") {
		content = 
			<LinkToSocial
			modalContent = {modalContent}
			handleClose  = {handleClose }
			/>
	}

	else {
		content = 
			<ExperienceDetails />
	}

	return (
		{content}
	);
}

export default Modal;