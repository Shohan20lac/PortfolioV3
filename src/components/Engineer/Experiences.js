import { motion } from "framer-motion"

import { React, useState, useEffect } from 'react';
import Accordion from '../Container/Accordion';

import MenuCard from '../Card/MenuCard';
import Card from '../Card/Card'

import { professionalExperiences, academicExperiences } from '../../utilities/Experiences'
import { skills } from '../../utilities/Skills'
import { projects } from '../../utilities/Projects'

import '../../styles/toggleButtonStyles.css'

const professionalThumbnails = professionalExperiences.map(experience => experience.thumbnailUrl)
const academicThumbnails = academicExperiences.map(experience => experience.thumbnailUrl)

function Experiences (props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1> </h1>
            <div className="experiences-container">
                {
                    professionalExperiences.map((professionalExperience, index) => (
                        <Card
                            experienceType="prof"
                            cardTitle={`${professionalExperience.title} @ ${professionalExperience.institute}`}
                            cardSubtitle={professionalExperience.duration}
                            cardDescription={professionalExperience.intro}
                            imageUrl={professionalExperience.thumbnailUrl}
                            openModal={props.openModal}
                            contentIndex={index}
                        />
                    ))
                }
            </div>

            <h1> </h1>
            <div className="experiences-container">
                {
                    academicExperiences.map((academicExperience, index) => (
                        <Card
                            experienceType= "acad"
                            cardTitle={`${academicExperience.title} @ ${academicExperience.institute}`}
                            cardSubtitle={academicExperience.duration}
                            cardDescription={academicExperience.intro}
                            imageUrl={academicExperience.thumbnailUrl}
                        />
                    ))
                }
            </div>
        </motion.div>
    );
}

export default Experiences;