import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => {
                        return <li><img src={gif.images.original.url}></img></li>
                    })}
                </ul>
            </div>
        )
    }
}
