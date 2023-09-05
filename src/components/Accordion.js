import { React, useState, useRef } from 'react';

import AcademicExperience from './AcademicExperience';
import ProfessionalExperience from './ProfessionalExperience';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionSection = (props) => {
    const [visible, setVisible] = useState(props.expanded);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className = "accordion-section"
            role       = "button"
            tabIndex   = "0"
            onClick    = {() => {
                props.scrollToSection();
                props.onToggle();
                toggleVisibility();
            }}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    props.onToggle();
                }
            }}
            ref={props.sectionRef}
        >
            {visible
                ? <ExpandMoreIcon />
                : <ChevronRightIcon />  
            }

            <span className='accordion-header'> {props.title} </span>

            
            <div
                className = {`accordion-content-${visible ? 'slideIn' : 'slideOut'}`}
                onClick   = {props.stopPropagation}
            >
                {props.content}
            </div>
            
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


    const sectionRef = useRef(null);
    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <div className="accordion">
            <AccordionSection
                title="Academic Experience"
                content={<AcademicExperience />}
                expanded={expandedSections.has('section1')}
                stopPropagation={(event) => event.stopPropagation()}
                onToggle={() => toggleSection('section1')}
                sectionRef={sectionRef}
                scrollToSection={scrollToSection}
                onClick={() => {
                    scrollToSection()
                } }
            />
            
            <AccordionSection
                title="Professional Experience"
                content  = {<ProfessionalExperience/>}
                expanded={expandedSections.has('section2')}
                stopPropagation={(event) => event.stopPropagation()} // Add this prop
                onToggle={() => toggleSection('section2')}
                sectionRef={sectionRef}
                scrollToSection={scrollToSection}
            />
        </div>
    )
};



export default Accordion;