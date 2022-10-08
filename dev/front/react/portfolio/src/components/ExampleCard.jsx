import React from 'react';
import '../css/ExampleCard.css'

const ExampleCard = ({image, title, text, link, ...props}) => {
    return (
        <div className='examplecard' {...props}>
            <div className="image">
                <img src={image} alt="project" className="projectimage" />
            </div>
            <div className="projectinfo">
                <h3 className="projecttitle">{title}</h3>
                <p className="projectdescription">{text}</p>
                {
                    link !== ''
                    ? <p className='prplink'><a href={link} className="projectlink">{link}</a></p>
                    :<></>
                }
            </div>
        </div>
    );
};

export default ExampleCard;