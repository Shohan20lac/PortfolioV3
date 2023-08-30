import { React, useState } from 'react';
import CardIntro from './CardIntro'
import cse from '../images/cse.jpg';

function CardText (props) {

    const [slideNumber, setSlideNumber] = useState(0);

    return (
        <div className="card-text-container">
            {props.showHeader && <h3> {props.title}</h3>}
            <p>  {props.description}</p>
        </div>
    );
}

export default CardText;