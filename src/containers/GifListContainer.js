import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

let defaultSearch = `dogs`
const URL = `http://api.giphy.com/v1/gifs/search?q=${defaultSearch}&api_key=bmAMsXtSjWG9LIElvywerW5yvZzN7pSV&rating=g&limit=3`



export default class GifListContainer extends Component {

    state= {
        search: '',
        gifs: []
    }

    componentDidMount = () => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=bmAMsXtSjWG9LIElvywerW5yvZzN7pSV&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(data => this.setState({
            gifs: data.data
        }))
    }

    handleSubmit = (input) => {
        // defaultSearch = input
        // console.log(input)
        // this.setState({
        //     search: input
        // }) 
        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=bmAMsXtSjWG9LIElvywerW5yvZzN7pSV&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(data => this.setState({
            gifs: data.data
        }))
    }

    render() {
        // console.log(this.state.search)
        return (
            <div>
                <GifList gifs = {this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
