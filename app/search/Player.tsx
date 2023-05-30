import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

function Player({song}: {song:string;}) {
    console.log("song src: ", song);
   return (
       <div>
           <audio >
            <source src={song} type="audio/mp3" />
           </audio>
           <h4>Playing now</h4>
          {/*music search functionality */}
          {/*player Details here */}
          {/*plaer controls here */}
       </div>
  )
}
export default Player