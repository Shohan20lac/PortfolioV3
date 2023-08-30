import { React, useState } from 'react';
import ContentCard from './ContentCard'

import cse from '../images/cse.jpg';
import ai from '../images/ai.jpg';
import chaldal from '../images/chaldal.jpg';
import altersense from '../images/altersense.png';

let academicIntros = [
    "Favorite Courses: Linear Algebra, OOP, Database Management, Web Application.",
    "Targeted Study of data-driven disciplines. Minor courses: Artificial Intelligence, Machine Learning, Data Mining, Instrumentation, Robotics. Data Mining was my favorite."
]

let professionalIntros = [

]



function Experiences(props) {

    const academicExperiences = (
        <div className="experiences-container">
            <ContentCard
                category={props.category}
                cardTitle="BSc in Computer Science"
                cardSubtitle="(Jan 2018 - December 2022)"
                cardDescription={academicIntros[0]}
                imageUrl={cse}
            />
            <ContentCard
                category={props.category}
                cardTitle="Minor in Artificial Intelligence"
                cardSubtitle="(Jan 2022 - December 2022)"
                cardDescription={academicIntros[1]}
                imageUrl={ai}
            />
        </div>
    )

    const professionalExperiences = (
        <div className="experiences-container">
            <ContentCard
                category={props.category}
                cardTitle="Engineering Intern @ Chaldal"
                cardSubtitle="(Spring 2023, 6 months)"
                cardDescription={professionalIntros[0]}
                imageUrl={chaldal}
            />
            <ContentCard
                category={props.category}
                cardTitle="Minor in Artificial Intelligence"
                cardSubtitle="Summer 2022, 3 months"
                cardDescription={professionalIntros[1]}
                imageUrl={altersense}
            />
        </div>
    )

    return (
        <>
            { props.category === "academic" && academicExperiences      }
            { props.category === "professional" &&  professionalExperiences }
        </>
    );
}

export default Experiences;