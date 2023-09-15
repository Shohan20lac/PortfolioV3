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

function Skills() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h3 className="background-text"> This subsection is still under construction. Please check back in a week! </h3>
        </motion.div>

    );
}

export default Skills;