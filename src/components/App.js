import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < NavBar color='pink' title="Search those gifs" />
        <GifListContainer/>
    </div>
  )
}

export default App
