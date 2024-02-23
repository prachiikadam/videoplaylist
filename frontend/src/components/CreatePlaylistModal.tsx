import { useContext, useState } from "react"
import { Store } from "../store/store"
import { generateId } from '../utils/utils.ts'

interface CreatePlaylistModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const CreatePlaylistModal : React.FC<CreatePlaylistModalProps>= ({setIsModalOpen}) => {
 const [newPlaylistName ,setNewPlaylistName] = useState('')
const {dispatch } =  useContext(Store)
 const createPlaylist = () =>{
    dispatch({
        type : 'CREATE_PLAYLIST' ,
        playlistName : newPlaylistName,
        playlistId : generateId () ,
    })
    console.log('dispatching')
    setIsModalOpen(false)
 }
  return (
  
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">   
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
      <div className="relative w-[400px] h-[200px] border-1 border-black rounded-md shadow-lg shadow-violet-300 bg-white p-4 z-50">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 mb-5 mt-5 w-full"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
          placeholder="Enter playlist name"
        />
        <div className="flex justify-end">
          <button className="bg-violet-500 text-white px-4 py-2 rounded-md mr-2" onClick={createPlaylist}>Create Playlist</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePlaylistModal