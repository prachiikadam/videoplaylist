import { useState } from "react"
import CreatePlaylistModal from "./CreatePlaylistModal"


const CreatePlaylistCard = () => {
    const [isModalOpen , setIsModalOpen] = useState(false)
    const openCreatePlaylistModal = () =>{
        setIsModalOpen(true)

    }
  return (
    <div>
    <div className="w-[200px] h-[200px] border-1 border-violet-900 rounded-md shadow-lg shadow-violet-300 flex justify-center items-center">
        <span className="text-5xl text-violet-700" onClick={openCreatePlaylistModal}>+</span>
    </div>
    { isModalOpen ? <CreatePlaylistModal setIsModalOpen = {setIsModalOpen }/> :<></>}
    </div>
  )
}

export default CreatePlaylistCard