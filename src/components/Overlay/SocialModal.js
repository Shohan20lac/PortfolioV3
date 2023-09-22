import { motion } from "framer-motion"
import Backdrop   from './Backdrop'
import {useState, useEffect} from 'react'

import {socials} from '../../utilities/Socials'

function LinkToSocial
	({ modalContentIndex, handleClose }) {	
	const [textCopied, setTextCopied] = useState(false);
	const social = socials[modalContentIndex]

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
							src={social.imageUrl}
							alt="Shohan"
						/>
					</div>

					<div className="column modal-right">
						<p className="modal-text">  {social.websiteUrl}</p>
						<button
							className="mech-button"
							onClick={() => {
								navigator.clipboard.writeText(`${social.websiteUrl}`);
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


	);
}

const SocialModal = ({ handleClose, modalContentIndex }) => {
	return (
		<Backdrop onClick={handleClose}>
			<LinkToSocial modalContentIndex={modalContentIndex} />
		</Backdrop>
	);
}

export default SocialModal;