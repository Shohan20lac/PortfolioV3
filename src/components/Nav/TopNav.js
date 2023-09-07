import React from 'react';
import ReactDOM from 'react-dom/client';

import Buttons from '../Input/Buttons';

import shohan from '../../images/shohan.png';

import github   from '../../images/github.svg';
import linkedIn from '../../images/linkedin.png';
import facebook from '../../images/facebook.svg';
import spotify  from '../../images/spotify.png';

import react  from '../../images/react.png';
import python from '../../images/python.png';
import fsharp from '../../images/fsharp.png';
import leetcode from '../../images/leetcode.png';

function SkillsIcons (flexDirection) {
    const iconList = [
        react,
        python,
        fsharp
    ];

    let divStyle = { display: "flex" };

    switch (flexDirection) {
        case "row":
            divStyle.flexDirection = "row";
            break;
        case "column":
            divStyle.flexDirection = "column";
            break;
        default:
            divStyle.flexDirection = "row";
            break;
    }

    return (
        <div style={divStyle} className="skillset-container">
            {iconList.map((url, index) => (
                <img className="navbar-icon" key={index} src={url} alt={`${index}`} />
            ))}
        </div>
    )
}

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
            <SocialsContainer />
        </div>
    );
}

function SocialsContainer () {
    const socialIconUrls = [ 
         github,
         leetcode,
         linkedIn,
         facebook,
         spotify
    ];

    const tooltips = [
        'github.com/Shohan20lac',
        'linkedin.com/in/shohan-rahman-49aab8185',
        'facebook.com/shohansolo',
        'open.spotify.com/artist/1h4WSzTyVRiMsEwpkVIXjL?si=725be9db0a534c1c'
    ];

    return (
        <div className="socials-container">
            {socialIconUrls.map((url, index) => (
                <div 
                    className='icon-container'
                    key={index}
                >
                    <img
                        className="navbar-icon"
                        src={url}
                        alt={`${index}`}
                    />
                    <div className="tooltip">{tooltips[index]}</div>

                </div>

            ))}

        </div>
    )
}

function TopNav(props) {

    return (
        <div className="topnav-container">

            <ImageContainer/>

            <NameCard
                currentScreen        = {props.currentScreen}
                updateClickedButton = {props.handleButtonClick}
                setCurrentScreen     = {props.setCurrentScreen}
            />

        </div>
    );
}

export default TopNav;