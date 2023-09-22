import React from 'react'
import { useState, useContext } from 'react'

import { projects } from '../../utilities/Projects'
import { motion } from "framer-motion"

import {ModalContext } from '../../index.js'


function ProjectIntro ({ screenSize, project }) {

    const setModalContent = useContext (ModalContext);
    const setModalType    = useContext (ModalContext);

    if (screenSize === "Desktop") {
        let topRow = <img className="card-thumbnail" src={project.imageUrl} alt="cse" />
        let bottomRow =
            <div className="card-text-container">
                <h3> {project.title}</h3>
                <h4> {project.intro}</h4>

                <div className="show-more-button-container">
                    <button
                        className="mech-button "
                        onClick={() => {
                            setModalContent (project);
                            setModalType    ("project");
                        }}
                    >
                        <span>
                            Show more
                        </span>
                        <i></i>
                    </button>

                </div>

            </div>

        return (
            <div className="card-content">
                {topRow}
                {bottomRow}
            </div>

        );
    }

    else if (screenSize === "Handheld") {
        let leftColumn = <img className="card-thumbnail" src={project.imageUrl} alt="cse" />
        let rightColumn =
            <div className="card-text-container">
                <h3> {project.title}</h3>
                <h4> {project.intro}</h4>

                <div className="show-more-button-container">
                    <button
                        className="mech-button "
                        onClick={() => {
                            
                        }}
                    >
                        <span>
                            Show more
                        </span>
                        <i></i>
                    </button>

                </div>

            </div>

        return (
            <motion.div
                className={`content-card row`}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                    setModalContent(<ProjectIntro/>)
                    setModalType("project");
                }}
            >
                <div className="card-content">
                    {leftColumn}
                    {rightColumn}
                </div>
            </motion.div>
        );
    }
}

export default ProjectIntro