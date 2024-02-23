import { useContext } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Store } from "../store/store"
import VideoCard from "./VideoCard"
import { Draggable } from "react-drag-reorder"; 


const VideoList = () => {

const [ searchPrams] = useSearchParams()
const {playListsState ,dispatch} = useContext(Store)
console.log(typeof searchPrams.get('playlistId'))
const playlistId = searchPrams.get('playlistId')

const playlistToRender = playListsState.filter((playlist)=> playlist.playlistId === playlistId)

const getChangedPos = (currentPos :number , newPos :number) => {
  dispatch({
    type :'REORDER_VIDEOS',
    index1 : currentPos,
    index2 : newPos ,
    playlistId : playlistId 
  })
};

    if(playlistToRender.length== 0){
        return <div> OOPppss Playlist does not exist</div>
    }

  return (
    <div className="flex flex-wrap">
        <Draggable onPosChange={getChangedPos}>
        { playlistToRender[0].videos.map((video,index)=>(<Link to={"/watch?playlistId="+playlistToRender[0].playlistId +"&videoIndex="+index}><VideoCard key={index} video={video}/></Link>))}
        </Draggable>
    </div>
  )
}

export default VideoList