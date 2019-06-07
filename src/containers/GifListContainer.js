import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

const API_KEY = process.env.REACT_APP_API_KEY

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  render() {
    console.log("I'm flattered you're checking out my github! If you're page does not compile, you need to create an account on giphy and get your own api_key 🤷‍  pssst please stay safe and mask your api_key!")
    return (
      <div>
         <GifSearch fetchGifs={this.fetchGifs} />
         <GifList gifs={this.state.gifs} />
     </div>
    )
  }

  fetchGifs = (query = "gross") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`)
      .then(resp => resp.json())
      .then(gifs => {
         this.setState({
           gifs: gifs.data.map(gif => ({ url: gif.images.original.url }))
         })
        })
      }

  componentDidMount() {
    this.fetchGifs()
  }

}

export default GifListContainer
