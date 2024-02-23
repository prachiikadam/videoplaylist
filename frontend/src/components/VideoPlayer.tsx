import { useContext ,useEffect,useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { Store } from "../store/store"



const VideoPlayer = () => {
  const {playListsState , dispatch} = useContext(Store)
  const [ searchParams] = useSearchParams()
  const playlistId =  searchParams.get('playlistId')
  const videoIndex = searchParams.get('videoIndex')
  console.log(searchParams.get('playlistId'))
  console.log(searchParams.get('videoIndex'))
  
  const playlist = playListsState.find((element)=> element.playlistId == playlistId)
  const videoToPlay = videoIndex ? (playlist?.videos[parseInt(videoIndex)]) :null


  const inputRef = useRef <HTMLVideoElement>(null);


  const timeUpdateHandler =(e : React.SyntheticEvent<HTMLVideoElement>)=>{
   if(videoIndex && playlistId){
    dispatch({
      type : "UPDATE_PLAYBACK_POSITION",
      videoIndex : parseInt(videoIndex) ,
      playlistId : playlistId ,
      playbackPosition :  e.currentTarget.currentTime
    })
   }
   

  }


  useEffect(()=>{
    if(inputRef && inputRef.current && videoToPlay){
      inputRef.current.currentTime = videoToPlay.playbackPosition
    }
  },[])

  if(!videoToPlay){
    return <div>Invalid videoooooo</div>
  }
  return (
    <div>
      <video src={videoToPlay.sources[0]} 
      poster={videoToPlay.thumb}
      onTimeUpdate={timeUpdateHandler}
      ref={inputRef}
      controls 
       />
    </div>
  )
}

export default VideoPlayer