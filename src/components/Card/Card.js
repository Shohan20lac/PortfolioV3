import { React, useEffect, useState } from 'react';
import CardText from './CardText'
import { useSpring} from 'react-spring';
import { motion } from 'framer-motion';


function Card(props) {
    const [flipped, setFlipped] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect (
        () => { console.log (flipped) },
        [flipped]
    )

    const image = (
        <img className="card-thumbnail" src={props.imageUrl} alt="cse" />
    )
    const cardTitle = <h3> {props.cardTitle}       </h3>
    const cardSubtitle = <h4> {props.cardSubtitle} </h4>


    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

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

    const cardVariants = {
        flip: {
            rotateX: 180,
            scale: 1,
            transition: { duration: .35 },
            zIndex: 10,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
        },
        noflip: i => ({
            rotateY: i * 15,
            scale: 1 - Math.abs(i * 0.15),
            x: i ? i * 50 : 0,
            opacity: 1 - Math.abs(i * .15),
            zIndex: 10 - Math.abs(i),
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
            transition: { duration: .35 }
        })
    }

    
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
        <motion.div
            className    = "content-card"
            whileHover   = {{ scale: 1.05 }}
            onMouseEnter = {handleMouseEnter}
            onMouseLeave = {handleMouseLeave}
            variants     = {cardVariants}
            animate={flipped ? "flip" : "noFlip"}
            style={transform}
        >
            <div className="card-content">
                {item1}
                {item2}
            </div>
        </motion.div>
    );
}

export default Card;