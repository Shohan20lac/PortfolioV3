import { React, useState } from 'react';
import Accordion from '../Accordion';
import { motion, AnimatePresence } from 'framer-motion';

import chaldal from '../../images/chaldal.jpg';
import altersense from '../../images/altersense.png';
import react from '../../images/react.png';
import iub from '../../images/iub.png';
import project from '../../images/projects.png';
import ExpandingCard from '../Card/ExpandingCard';
import python from '../../images/python.png';
import fsharp from '../../images/fsharp.png';
import leetcode from '../../images/leetcode.png';


const experiences = [
    chaldal,
    altersense,
    iub
];

const skills = [
    react,
    python,
    fsharp,
    leetcode
]

const projects = [
    project
]

function EngineerScreen (props) {

    const [cardClicked, setCardClicked] = useState(false);

    const distributionPositions = [
        { x: 0, y: 0 },
        { x: 500, y: 0 },
        { x: 800, y: 0 },
    ];

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleDistributionComplete = () => {
        setIsClicked(false);
    };


    return (
        <>
            <motion.div
                initial      = {{ opacity:  0 }}
                animate      = {{ opacity:  1 }}
                exit         = {{ opacity:  0 }}
                transition   = {{ duration: 1 }}
                className    = "section-header-container">
                <p className = "background-text"> I am an entry-level full stack engineer with over 1 year of experience in modelling and developing scalable web applications.</p>
                
                <p className="background-text">
                    Since my recent experiences in software engineering and ML engineering, I am motivated to dedicate
                    myself full-time to the world of Data Science, Software Development and DevOps engineering.
                </p>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`sort-cards-container ${cardClicked !== 'fade-out' ? '' : ''}`}
            >

                <ExpandingCard
                    images={experiences}
                    subtitle = "Experience"
                />
                
                <ExpandingCard
                    images={skills}
                    subtitle="Skills"
                />
                
                <ExpandingCard
                    images={projects}
                    subtitle="Projects"
                />
            </motion.div>


            <motion.div
                initial    = {{ opacity: 0 }}
                animate    = {{ opacity: 1 }}
                exit       = {{ opacity: 0 }}
                transition={{ duration: 1 }}
            >

                {cardClicked && < Accordion /> }            
            </motion.div>        
        </>

    );
}

export default EngineerScreen;