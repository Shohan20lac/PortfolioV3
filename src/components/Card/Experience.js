import { useState } from 'react';
import { motion } from "framer-motion"
import { professionalExperiences } from "../../utilities/Experiences";
import { academicExperiences } from "../../utilities/Experiences";
import Icons from "./Icons"


import React from 'react'


const Thumbnail = ({ imageUrl, iconLabel }) => (

    // TODO: add openModal functionality to these thumbnails too.

    <div
        className="column"
    >
        <div className="subexperience-container">
            <img
                src={imageUrl}
                alt={iconLabel}
                className="subexperience-thumbnail"
            />
        </div>

        <span className="card-thumb-label centered"> {iconLabel} </span>

    </div>
)

function SubexperienceThumbnails({ experienceType, contentIndex}) {

    let experience;
    let subExperiences;
    let subExperienceContent;

    if (experienceType === "prof") {
        experience           = professionalExperiences[contentIndex]
        subExperiences       = experience.subExperiences
        subExperienceContent = 
            subExperiences.map (subExperience =>
                <Thumbnail
                    imageUrl  = {subExperience.thumbnailUrl}
                    iconLabel = {subExperience.title}
                />
            )
    }
    else {
        experience = academicExperiences[contentIndex]
        subExperienceContent = <> Subexperience Content </>
    }

    let containerHeading = `${experience.title} @ ${experience.institute}`

    return (
        <motion.div
            initial    = {{ opacity: 0 }}
            animate    = {{ opacity: 1 }}
            exit       = {{ opacity: 0 }}
            transition = {{ duration: 1 }}
            className  = {`column`}
        >
            <div>
                <h3> {containerHeading} </h3>
            </div>
            
            <div className = {`thumbnails-container row fullwidth`}>
                {subExperienceContent}
            </div>

        </motion.div>

    );
}

function Text({ title, subtitle, description }) {
    return (
        <>
            <h3> {title}</h3>
            <h4> {subtitle}</h4>
            <p>  {description}</p>
        </>
    )
}

function ExperienceIntro ({
    screenSize,
    experience,
    showMore,
    setShowMore }) {

    if (screenSize === "Desktop") {
        let topRow = <img className="card-thumbnail" src={experience.imageUrl} alt="cse" />
        let bottomRow =
            <div className="card-text-container">
                <Text
                    title={experience.title}
                    subtitle={experience.subtitle}
                    description={experience.description}
                />

                <div className="show-more-button-container">
                    <button
                        className="mech-button "
                        onClick={() => setShowMore(!showMore)}
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
        let leftColumn = <img className="card-thumbnail" src={experience.imageUrl} alt="cse" />
        let rightColumn =
            <div className="card-text-container">
                <Text
                    title       = {experience.title}
                    subtitle    = {experience.subtitle}
                    description = {experience.description}
                    onClick     = {() => setShowMore(!showMore)}
                />

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
                className  = {`content-card row`}
                whileHover = {{ scale: 1.05 }}
                onClick    = {() => setShowMore (!showMore)}
            >
                <div className="card-content">
                    {leftColumn}
                    {rightColumn}
                </div>
            </motion.div>
        );
    }
}

export function Experience ({experienceType, contentIndex, experience, showMore, setShowMore }) {

    return (
        <>
            {showMore
                ? <SubexperienceThumbnails
                    contentIndex={contentIndex}
                    experienceType={""}
                />

                : <ExperienceIntro
                    experience  = {experience }
                    showMore    = {showMore   }
                    setShowMore = {setShowMore}
                />
            }
        </>


    );

}

export default Experience;