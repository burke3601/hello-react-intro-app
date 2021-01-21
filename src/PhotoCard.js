import React, { useState } from 'react';



function PhotoCard(props) {
    // useState returns and array
    // the first item is the current value
    // the second item is a function that can update value
    const state = useState(0);
    const count = state[0];
    const setCount = state[1];

    // const unlikeState = useState(0);
    // const unlike = unlikeState[0];
    //const setCount = state[-1];

    // the initial 0 is ignored after the first time
    // that the PhotoCard function is called.

    //console.log(props)
    //console.log(props.title)
    // add conditional rendering
    return (

        <div className="card-frame">
            {/* {props.description && <h3>{props.description}</h3>}
            { props.title ? <h3>{props.title}</h3> : <h3>does this ternary work?</h3>} */}
           <button onClick={

                (e) => {

                    //count += 1;
                    setCount(count + 1);
                    console.log(count);

                }

           }>Like</button>
           <button onClick={
               (e) => { 
                   setCount(count - 1);
                   // create an if statement to stop count at 0 
                   // don't allow negatives
                   //if (count <= 0) 
                   
               }
           }>

           Unlike</button>
           <p>likes: {count}</p>
           
           <img src={props.url} alt={props.description}/>
           <p className="title">{props.title}</p>
           <p className="desc">Description: {props.description}</p>
           
        </div>
    );
}

export default PhotoCard;