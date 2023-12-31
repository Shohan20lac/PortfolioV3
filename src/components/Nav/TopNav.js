import React from 'react';
import ReactDOM from 'react-dom/client';

import Buttons from '../Input/Buttons';

import shohan from '../../images/shohan.png';

import socials from '../../utilities/Socials';

function ImageContainer (flexDir) {
    return (
        <div className ="profile-pic-container">
            <img
                className = "navbar-thumbnail"
                src       = {shohan}
                alt       = "Shohan"
            />
        </div>
    )
}

function SocialsContainer({ openModal }) {

    return (
        <div className="socials-container">
            {socials.map((social, index) => (
                <div 
                    className='icon-container'
                    key={index}
                >
                    <img
                        className="navbar-icon"
                        src={social.imageUrl}
                        alt={`${social.title}`}
                        onClick={() => {
                            console.log ("modal clicked")
                            openModal(index)
                        }}
                    />
                    <div className ="tooltip">{social.websiteUrl}</div>
                </div>
            ))}

        </div>
    )
}
function NameCard (props) {

    return (
        <div className="namecard">
            <h1 className="navbar-header"    id="topnav-header"   > Shohan Mozid Rahman      </h1>
            <Buttons
                flexDir="row"
                updateClickedButton= {props.updateClickedButton}
                currentScreen       = {props.currentScreen}
                setCurrentScreen    = {props.setCurrentScreen}
            />
            <h3 className="navbar-text"> BSc, CSE, Independendent University, Bangladesh</h3>
            <SocialsContainer
                openModal={props.openModal}
            />
        </div>
    );
}

function TopNav (props) {

    return (
        <div className="topnav-container">

            <ImageContainer/>

            <NameCard
                currentScreen={props.currentScreen}
                updateClickedButton={props.handleButtonClick}
                setCurrentScreen={props.setCurrentScreen}
                openModal={props.openModal}
            />

        </div>
    );
}

export default TopNav;