import { useContext } from "react"
import {Store} from '../store/store'



const Playlist = () => {
  
  const {state}= useContext(Store)
  console.log('state ==>',state)
  return (
    
    <div>VideoContainer</div>
  )
}

export default Playlist