import React from 'react';
import ReactDOM from 'react-dom/client';

import shohan from '../images/shohan.png';

import github   from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import spotify  from '../images/spotify.png';

import react  from '../images/react.png';
import python from '../images/python.png';
import fsharp from '../images/fsharp.png';

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
                <img class="navbar-icon" key={index} src={url} alt={`${index}`} />
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
function NameCard() {

    return (
        <div className="namecard">
            <h1 className="navbar-header"    id="topnav-header"   > Shohan Mozid Rahman      </h1>
            <h2 className="navbar-subheader" id="topnav-subheader"> Engineer, Author, Artist </h2>
            <h3 className="navbar-text"> BSc, CSE, Independendent University, Bangladesh</h3>
            <SkillsIcons />
        </div>
    );
}

function SocialsContainer () {
    const socialIconUrls = [ 
         github,
         linkedIn,
         facebook,
         spotify
    ];

    return (
        <div className = "socials-container">
            {socialIconUrls.map((url, index) => (
                <img className="navbar-icon"key={index} src={url} alt={`${index}`} />
            ))}

        </div>
    )
}

function TopNav () {
    return (
        <div className="topnav-container">

            <ImageContainer/>            

            <NameCard/>
            
            <SocialsContainer/>

        </div>
    );
}

export default TopNav;