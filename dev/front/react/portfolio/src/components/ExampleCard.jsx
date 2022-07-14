import React from 'react';
import '../css/ExampleCard.css'

const ExampleCard = ({image, title, text, ...props}) => {
    return (
        <div className='examplecard' {...props}>
            <div className="image">
                <img src={image} alt="project" className="projectimage" />
            </div>
            <div className="projectinfo">
                <h3 className="projecttitle">{title}</h3>
                <p className="projectdescription">{text}</p>
            </div>
        </div>
    );
};

export default ExampleCard;