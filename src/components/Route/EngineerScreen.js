import { React, useState, useEffect } from 'react';
import Accordion from '../Container/Accordion';
import { motion, AnimatePresence } from 'framer-motion';

import MenuCard from '../Card/MenuCard';
import Card from '../Card/Card'

import {professionalExperiences, academicExperiences } from '../../utilities/Experiences'
import { skills   } from '../../utilities/Skills'
import { projects } from '../../utilities/Projects'

import ToggleButtons from '../Input/ToggleButtons'

import Engineerintro from '../SectionHeader/EngineerIntro'

import Experiences from '../Engineer/Experiences'
import Projects from '../Engineer/Projects'

import '../../styles/toggleButtonStyles.css'
import '../../styles/cardStyles.css'

const professionalThumbnails = professionalExperiences.map (experience => experience.thumbnailUrl)
const academicThumbnails     = academicExperiences.map     (experience => experience.thumbnailUrl)


function Intro(props) {
    return (
        <>
            <Engineerintro />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`sort-cards-container ${props.clickedCard !== 'fade-out' ? '' : ''}`}
            >

                <MenuCard
                    images={professionalThumbnails.concat(academicThumbnails)}
                    subtitle="Experience"
                    handleClick={() => props.handleCardClick("Experiences")}
                />

                <MenuCard
                    images={skills}
                    subtitle="Skills"
                    handleClick={() => props.handleCardClick("Skills")}
                />

                <MenuCard
                    images={projects}
                    subtitle="Projects"
                    handleClick={() => props.handleCardClick("Projects")}
                />
            </motion.div>
        </>
    );
}

function EngineerScreen (props) {

    const [clickedCard, setClickedCard] = useState(null);
    const [toggledButton, setToggledButton] = useState(null);

    const handleButtonToggle = (segmentName) => {
        setToggledButton(segmentName);
        setClickedCard(segmentName);
    };

    const handleCardClick = (segmentName) => {
        setToggledButton (segmentName);
        setClickedCard   (segmentName);
    };        

    const [screenContent, setScreenContent] =
        useState (
            <Intro
                clickedCard    = {clickedCard}
                toggledButton  = {toggledButton}
                handleCardClick= {handleCardClick}
            />
        );

    useEffect (
        () => {
            if (toggledButton === "Experiences") {
                setScreenContent(
                    <Experiences handleClick={handleCardClick} />
                )
            }
            else if (toggledButton === "Projects") {
                setScreenContent (
                    <Projects />
                )
            }

        },
        [toggledButton, clickedCard]
    )        

    return (
        <>
            {clickedCard !== null && 
                <ToggleButtons
                    clickedCard={clickedCard}
                    toggledButton={toggledButton}
                    handleButtonToggle={handleButtonToggle}
                />
            }
            {screenContent}
        </>
    );

}

export default EngineerScreen;