import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import '../../styles/cardStyles.css'

function MenuCard({ images, subtitle, handleClick }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState (false);

    useEffect(() => {
        let interval;

        if (isHovered) {
            interval = setInterval (() => {
                setImageIndex ((prevIndex) =>
                    (prevIndex + 1) % images.length
                );
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };


    }, [isHovered]);

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            key={imageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={
                {
                    type: "spring",
                    stiffness: 400, damping: 10
                }
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            className="sort-card-container"
        >
            <div
                className    = 'sort-card'>
                <motion.img
                    className="sort-card-image" src={images[imageIndex]} alt="cse"
                />
            </div>
            <span className='sort-card-label'> {subtitle} </span>
        </motion.div>
    );
}

export default MenuCard;