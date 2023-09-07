import { React } from 'react';
import ContentCard from '../Card/ContentCard';
import cse from '../../images/cse.jpg';
import ai from '../../images/ai.jpg';

let academicIntros = [
    "Most sustantial projects in OOP, Database Management, Web Applications.",
    "Using Python and numpy to solve large-scale problems in Machine Learning, Data Mining, Instrumentation and Robotics."
]
function AcademicExperience(props) {

    return (
        <div className="experiences-container">
            <ContentCard
                cardTitle="BSc in Computer Science"
                cardSubtitle="(Jan 2018 - December 2022)"
                cardDescription={academicIntros[0]}
                imageUrl={cse}
            />
            <ContentCard
                cardTitle="Minor in Artificial Intelligence"
                cardSubtitle="(Jan 2022 - December 2022)"
                cardDescription={academicIntros[1]}
                imageUrl={ai}
            />
        </div>
    )
}


export default AcademicExperience;