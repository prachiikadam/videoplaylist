import { PlayList } from "../store/store"



const PlaylistCard : React.FC<{playlist :PlayList}>= ({playlist }) => {
  return (
    <div className="w-[200px] h-[200px] border-1 border-violet-900 rounded-md shadow-lg shadow-violet-300 flex justify-center items-center mr-5">
        <span className="text-xl text-violet-700" >{playlist.playlistName}</span>
    </div>
  )
}

export default PlaylistCard