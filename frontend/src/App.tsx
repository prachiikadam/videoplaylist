

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Playlist from './components/Playlist'
import { StoreProvider } from './store/store'

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Playlist/>
  },
  {
    path: "/watch",
    element: <VideoPlayer/>
  },
  {
    path: "/playlist",
    element :<VideoList/>
  }
]);

function App() {
  

  return (

    <StoreProvider>
    <RouterProvider router={appRouter} />
    </StoreProvider>
  )
}

export default App
