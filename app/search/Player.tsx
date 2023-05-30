import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

function Player({song}: {song:string;}) {
    console.log("song src: ", song);
   return (
       <div>
           <audio controls autoPlay={true}>
            <source src={song} type="audio/mp3" />
           </audio>
           <h4>Playing now</h4>
        
       </div>
  )
}
export default Player