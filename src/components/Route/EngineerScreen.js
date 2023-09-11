import { React, useState, useEffect } from 'react';
import Accordion from '../Container/Accordion';
import { motion, AnimatePresence } from 'framer-motion';

import MenuCard from '../Card/MenuCard';
import Card from '../Card/Card'

import {professionalExperiences, academicExperiences } from '../../utilities/Experiences'
import { skills   } from '../../utilities/Skills'
import { projects } from '../../utilities/Projects'

import '../../styles/toggleButtonStyles.css'

const professionalThumbnails = professionalExperiences.map (experience => experience.thumbnailUrl)
const academicThumbnails     = academicExperiences.map     (experience => experience.thumbnailUrl)

const IdentityHeader = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="section-header-container">
        <p className="background-text"> I am an entry-level full stack engineer with over 1 year of experience in modelling and developing scalable web applications.</p>

        <p className="background-text">
            Since my recent experiences in software engineering and ML engineering, I am motivated to dedicate
            myself full-time to the world of Data Science, Software Development and DevOps engineering.
        </p>
    </motion.div>
)

function ToggleButtons ({ clickedCard, toggledButton, handleButtonToggle }) {
    return (
        <>
            {clickedCard !== null &&  
                <div className="sort-by-container">
                    <div className="tri-state-toggle">
                        <button
                            className={`tri-state-toggle-button ${toggledButton === "Experiences" ? 'active' : ''}`}
                            onClick={() => handleButtonToggle("Experiences")}
                        >
                            Experiences
                        </button>

                        <button
                            className={`tri-state-toggle-button ${toggledButton === "Skills" ? 'active' : ''}`}
                            onClick={() => handleButtonToggle("Skills")}
                        >
                            Skills
                        </button>

                        <button
                            className={`tri-state-toggle-button ${toggledButton === "Projects" ? 'active' : ''}`}
                            onClick={() => handleButtonToggle("Projects")}
                        >
                            Projects
                        </button>
                    </div>

                </div>    
            }
        </>

    )
}
function EngineerScreen (props) {

    const [clickedCard, setClickedCard] = useState(null);
    const [toggledButton, setToggledButton] = useState (null);

    const handleButtonToggle = (segmentName) => {
        setToggledButton(segmentName);
    };

    const handleCardClick = (segmentName) => {
        setToggledButton(segmentName);
        setClickedCard  (segmentName);
    };

    let screenContent;

    switch (clickedCard) {
            case ("Experiences"): {
                screenContent =
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <ToggleButtons
                            clickedCard        = {clickedCard}
                            toggledButton      = {toggledButton}
                            handleButtonToggle = {handleButtonToggle}
                        />

                        <h3 className="background-text"> Professional Experiences </h3>
                        <div className="experiences-container">
                            {
                                professionalExperiences.map((professionalExperience, index) => (
                                    <Card
                                        cardTitle={`${professionalExperience.title} @ ${professionalExperience.institute}`}
                                        cardSubtitle={professionalExperience.duration}
                                        cardDescription={professionalExperience.intro}
                                        imageUrl={professionalExperience.thumbnailUrl}
                                    />
                                ))
                            }
                        </div>

                        <h3 className="background-text"> Academic Experiences </h3>
                        <div className="experiences-container">
                            {
                                academicExperiences.map((academicExperience, index) => (
                                    <Card
                                        cardTitle={`${academicExperience.title} @ ${academicExperience.institute}`}
                                        cardSubtitle={academicExperience.duration}
                                        cardDescription={academicExperience.intro}
                                        imageUrl={academicExperience.thumbnailUrl}
                                    />
                                ))
                            }
                        </div>
                    </motion.div>
                break;
            }
            case ("Skills"): {
                screenContent = <p> Skills Section </p>
                break;
            }
            case ("Projects"): {
                screenContent = <p> Projects Section </p>
                break;
            }
            default: {
                screenContent =
                    <>
                        <IdentityHeader />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={`sort-cards-container ${clickedCard !== 'fade-out' ? '' : ''}`}
                        >

                            <MenuCard
                                images={professionalThumbnails.concat(academicThumbnails)}
                                subtitle="Experience"
                            handleClick={() => handleCardClick("Experiences")}
                            />

                            <MenuCard
                                images={skills}
                                subtitle="Skills"
                                handleClick={() => handleCardClick("Skills")}
                            />

                            <MenuCard
                                images={projects}
                                subtitle="Projects"
                                handleClick={() => handleCardClick("Projects")}
                            />
                        </motion.div>
                    </>
            }
        }
        

    return (
        screenContent
    );
    // Logic for rendering Screens based on Hook value

}

export default EngineerScreen;