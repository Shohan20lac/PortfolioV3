import { React, useState } from 'react';

import { downarrow } from '../images/downarrow.png'
import { uparrow } from '../images/uparrow.png'
import AcademicExperience from './AcademicExperience';
import ProfessionalExperience from './ProfessionalExperience';

const AccordionSection = (props) => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className="accordion-section"
            role="button"
            tabIndex="0"
            onClick={() => {
                props.onToggle();
                toggleVisibility(); 
            }}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    props.onToggle();
                }
            }}
        >
            
            <h3
                className="accordion-header"
            >
                {props.title}
            </h3>
            {props.expanded &&
                <div
                    className = {`accordion-content-${visible ? 'slideIn' : 'slideOut'}`}
                    onClick   = {props.stopPropagation}
                >
                    {props.content}
                </div>
            }
        </div>
    );
}

const Accordion = (props) => {
    const [expandedSections, setExpandedSections] = useState(new Set());

    const toggleSection = (sectionId) => {
    const newExpandedSections = new Set(expandedSections);

    if (newExpandedSections.has(sectionId)) {
        newExpandedSections.delete(sectionId);
    } else {
        newExpandedSections.add(sectionId);
    }

    setExpandedSections(newExpandedSections);
    };

    return (
        <div className="accordion">
            <AccordionSection
                title    = "Academic Experience"
                content  = {<AcademicExperience/>}
                expanded={expandedSections.has('section1')}
                stopPropagation={(event) => event.stopPropagation()}
                onToggle = {() => toggleSection('section1')}
            />
            <AccordionSection
                title="Professional Experience"
                content  = {<ProfessionalExperience/>}
                expanded={expandedSections.has('section2')}
                stopPropagation={(event) => event.stopPropagation()} // Add this prop
                onToggle = {() => toggleSection('section2')}
            />
        </div>
    )
};



export default Accordion;