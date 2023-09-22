import { React, useEffect, useState } from 'react';
import { useSpring} from 'react-spring';
import { motion } from 'framer-motion';
import ExperienceIntro from './ExperienceIntro';
import Thumbnails from './Thumbnails'

import '../../styles/cardStyles.css'
function Card(props) {

    const [flipped, setFlipped] = useState(false)

    const [screenSize, setScreenSize] = useState("Desktop");

    const [isHovered, setIsHovered] = useState (false);
    const handleMouseEnter = () => setIsHovered (true)
    const handleMouseLeave = () => setIsHovered (false)

    const [showMore, setShowMore]       = useState (false);

    const [cardContent, setCardContent] =
        useState (
            <ExperienceIntro
                experienceType={props.experienceType}
                screenSize={screenSize}
                title={props.cardTitle}
                subtitle={props.cardSubtitle}
                description={props.cardDescription}
                imageUrl={props.imageUrl }
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                showMore={showMore}
                setShowMore={setShowMore}
            />
        );


    const cardVariants = {
        flip: {
            rotateX: 180,
            scale: 1,
            transition: { duration: .35 },
            zIndex: 10,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
        },
        noflip: i => ({
            rotateY: i * 15,
            scale: 1 - Math.abs(i * 0.15),
            x: i ? i * 50 : 0,
            opacity: 1 - Math.abs(i * .15),
            zIndex: 10 - Math.abs(i),
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
            transition: { duration: .35 }
        })
    }

    
    function handleResize() {
        console.log ('resized to: ', window.innerWidth, 'x', window.innerHeight)

        if (!showMore) {
            if (window.innerWidth > 600)
                setScreenSize ("Desktop");
            else
                setScreenSize ("Handheld");
        }
    }

    window.addEventListener ('resize', handleResize)

    useEffect (
        () => {
            if (!showMore) {
                setCardContent (
                    <ExperienceIntro
                        experienceType={props.experienceType}
                        screenSize={screenSize}
                        title            = { props.cardTitle       }
                        subtitle         = { props.cardSubtitle    }
                        description      = { props.cardDescription }
                        imageUrl         = { props.imageUrl        }
                        handleMouseEnter = { handleMouseEnter      }
                        handleMouseLeave = { handleMouseLeave      }
                        showMore         = { showMore              }
                        setShowMore      = { setShowMore           }
                    />
                );
            }
            else {
                setCardContent (
                    <Thumbnails
                        openModal={props.openModal}
                        contentIndex={props.contentIndex}
                    />
                )
            }
        },
        [showMore]
    )

    /*return (cardContent)*/
    return (
        <motion.div
            className    = {`content-card column fullwidth`}
            whileHover   = {{ scale: 1.05 }}
            onMouseEnter = {handleMouseEnter}
            onMouseLeave = {handleMouseLeave}
        >
            {cardContent}
        </motion.div>

    )
}

export default Card;