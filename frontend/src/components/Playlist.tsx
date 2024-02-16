import { useContext } from "react"
import {Store} from '../store/store'

import PlaylistCard from "./PlaylistCard"
import CreatePlaylistCard from "./CreatePlaylistCard"
import { Link } from "react-router-dom"

const Playlist = () => {
  
  const {playListsState}= useContext(Store)
  console.log('state ==>',playListsState)
  
  return (
    <div className="flex flex-wrap">
     {
        playListsState.length ? playListsState.map((playlist,index)=>(<Link to = {"/playlist?playlistId="+playlist.playlistId}><PlaylistCard playlist = {playlist} key={index}/></Link>)) :<></>
     }
     <CreatePlaylistCard />
    </div>
  )
}

export default Playlist