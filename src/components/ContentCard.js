import { React, useState } from 'react';
import CardIntro from './CardIntro'
import CardText from './CardText'


function ContentCard(props) {

    const [slideNumber, setSlideNumber] = useState(0);

    const image = (
        <img className="card-thumbnail" src={props.imageUrl} alt="cse" />
    )
    const cardTitle = <h3> {props.cardTitle}       </h3>
    const cardSubtitle = <h4> {props.cardSubtitle} </h4>

    const item1 = image;
    const item2 = (
        <CardText
            title={props.cardTitle}
            subtitle={props.cardSubtitle}
            description={props.cardDescription}
            showHeader={true}
            showSubheader={true}
        />
    );
    
    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)

        if (window.innerWidth > 600) {
            const item1 = (
                <>
                    {cardTitle   }
                    {cardSubtitle}
                </>
            );
            const item2 = (
                <CardText
                    description={props.cardDescription}
                    showHeader={false}
                />
            )            
            console.log('window is wider than 600px. Reordering and re-styling...');
        }
    }

    window.addEventListener('resize', handleResize)

    return (
        <div className="content-card">
            <div className="card-content">
                {item1}
                {item2}
            </div>
        </div>
    );
}

export default ContentCard;