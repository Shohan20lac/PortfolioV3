import { React } from 'react';
import ContentCard from '../Experience/ContentCard';
import cse from '../../images/cse.jpg';
import ai from '../../images/ai.jpg';

let academicIntros = [
    "Favorite Courses: Linear Algebra, OOP, Database Management, Web Application.",
    "Targeted Study of data-driven disciplines. Minor courses: Artificial Intelligence, Machine Learning, Data Mining, Instrumentation, Robotics. Data Mining was my favorite."
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