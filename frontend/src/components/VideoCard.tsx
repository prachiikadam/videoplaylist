
import { useState } from "react";
import { Video } from "../store/store"
import VideoPlayer from "./VideoPlayer";


const VideoCard : React.FC<{video:Video}> = ({video} )  => {

    const { subtitle ,title ,thumb} = video 
    
  return (
    <div className="p-2 m-2 w-60 shadow-lg">
        <div>
          <img className="rounded-lg" alt="thumbnails" src={thumb} />
          <ul>
            <li>{title}</li>
            <li>{subtitle}</li>
          </ul>
        </div>
  </div>
  )
}

export default VideoCard