import React from 'react';
import PhotoCard from './PhotoCard';


const data = [
    {
        title:"W and K in Ireland",
        description:"Big Cliff",
        url:"/img3.jpeg"
    },
    {
        title:"W and K in NC",
        description:"Woods",
        url:"/img2.png"
    },
    {
        title:"Chipmunk Chewing",
        description:"nom nom nom nom",
        url:"/chipmunk.png"
    }
]

function PhotoGallery() {
    return (
        <>
            <h2>Photo Gallery</h2>
            <div className="gallery">
                {
                    data.map(i => <PhotoCard 
                        
                                    url={i.url}
                                    title={i.title}
                                    description={i.description} />)
                }
                
            </div>

        </>
    )
}

export default PhotoGallery;