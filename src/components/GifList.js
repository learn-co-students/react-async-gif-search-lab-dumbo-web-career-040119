import React, { Component } from 'react';

class GifList extends Component {

  render() {
    console.log(this.props, "from GifLists")
    return (
      <div>
      {this.props.gifs.map(gif => {
          return <li>
          <img src={gif.url}></img>
          </li>
      })}
      </div>
    );
  }

}

export default GifList;
