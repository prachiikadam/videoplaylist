

import './App.css'
import Playlist from './components/Playlist'
import { StoreProvider } from './store/store'

function App() {
 

  return (
    <StoreProvider>
    <Playlist/>
    </StoreProvider>
  )
}

export default App
