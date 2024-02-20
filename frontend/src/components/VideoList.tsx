import { useContext } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Store } from "../store/store"
import VideoCard from "./VideoCard"



const VideoList = () => {

const [ searchPrams] = useSearchParams()
const {playListsState} = useContext(Store)
console.log(typeof searchPrams.get('playlistId'))
const playlistId = searchPrams.get('playlistId')

const playlistToRender = playListsState.filter((playlist)=> playlist.playlistId === playlistId)

    if(playlistToRender.length== 0){
        return <div> OOPppss Playlist does not exist</div>
    }

  return (
    <div className="flex flex-wrap">
        { playlistToRender[0].videos.map((video,index)=>(<Link to={"/watch?playlistId="+playlistToRender[0].playlistId +"&videoIndex="+index}><VideoCard key={index} video={video}/></Link>))}
    </div>
  )
}

export default VideoList