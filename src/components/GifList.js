// A container does data fetching and then renders its corresponding sub-component. That’s it.
//
import React from 'react'

const GifList = (props) => {

  return (
    <div>
          {props.gifs.map(gif => <img alt='gif' key={gif.url} src={gif.url} />)}
    </div>
  )

}

export default GifList
