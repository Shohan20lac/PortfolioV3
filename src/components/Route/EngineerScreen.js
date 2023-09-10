import { React, useState, useEffect } from 'react';
import Accordion from '../Container/Accordion';
import { motion, AnimatePresence } from 'framer-motion';

import MenuCard from '../Card/MenuCard';
import Card from '../Card/Card'

import {professionalExperiences, academicExperiences } from '../../utilities/Experiences'
import { skills   } from '../../utilities/Skills'
import { projects } from '../../utilities/Projects'

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

function EngineerScreen (props) {

    const [cardClicked, setCardClicked] = useState (null);

    const handleClick = (cardName) => {
        setCardClicked(cardName);
    };

    // Logic for rendering Screens based on Hook value

    let screenContent;

            switch (cardClicked) {
                case ("Experience"): {
                    screenContent =
                        <motion.div
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >

                            <h3> Professional Experiences </h3>
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

                            <h3> Academic Experiences </h3>
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
                    break;
                }
                case ("Projects"): {
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
                                className={`sort-cards-container ${cardClicked !== 'fade-out' ? '' : ''}`}
                            >

                                <MenuCard
                                    images={professionalThumbnails.concat(academicThumbnails)}
                                    subtitle="Experience"
                                    handleClick={() => handleClick("Experience")}
                                />

                                <MenuCard
                                    images={skills}
                                    subtitle="Skills"
                                    handleClick={() => handleClick("Skills")}
                                />

                                <MenuCard
                                    images={projects}
                                    subtitle="Projects"
                                    handleClick={() => handleClick("Projects")}
                                />
                            </motion.div>
                        </>
                }
            }
        

    return (
        screenContent
    );
}

export default EngineerScreen;