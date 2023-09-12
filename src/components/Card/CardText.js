import { React, useState } from 'react';
import cse from '../../images/cse.jpg';

function CardText (props) {

    const [slideNumber, setSlideNumber] = useState(0);

    return (
        <div className="card-text-container">
            {props.showHeader && <h3> {props.title}</h3>}
            {props.showSubheader && <h4> {props.subtitle}</h4>}
            <p>  {props.description}</p>

			<div className="show-more-button-container">
				<button
					className="mech-button "
					onClick={() => {
					}}
				>
					<span>
						{`Show more`}
					</span>
					<i></i>
				</button>

			</div>

        </div>
    );
}

export default CardText;