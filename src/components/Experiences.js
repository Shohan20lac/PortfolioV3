import { React, useState } from 'react';
import ContentCard from './ContentCard'

import cse from '../images/cse.jpg';
import ai from '../images/ai.jpg';

let introDescriptions = [
    "Favorite Courses: Linear Algebra, OOP, Database Management, Web Application.",
    "Targeted Study of data-driven disciplines. Minor courses: Artificial Intelligence, Machine Learning, Data Mining, Instrumentation, Robotics. Data Mining was my favorite."
]

function Experiences(props) {

    return (
        <div className="experiences-container">
            <ContentCard
                category         = {props.category}
                cardTitle        = "BSc in Computer Science"
                cardDescription  = {introDescriptions[0]}
                imageUrl         = {cse}
            />
            <ContentCard
                category={props.category}
                cardTitle="Minor in Artificial Intelligence"
                cardDescription={introDescriptions[1]}
                imageUrl={ai}
            />
            
        </div>
    );
}

export default Experiences;