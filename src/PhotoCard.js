import React from 'react';

function PhotoCard(props) {
    console.log(props)
    console.log(props.title)
    return (
        <div className="card-frame">
           <img src={props.url} alt="pics"/>
           <p>{props.title}</p>
           <p>{props.description}</p>
           
        </div>
    );
}

export default PhotoCard;