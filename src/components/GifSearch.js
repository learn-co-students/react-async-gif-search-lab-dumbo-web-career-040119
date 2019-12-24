import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        searchTerm: ""
    }

    handlOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.searchTerm)
        e.target.reset()
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange={this.handlOnChange} type="text" name="searchTerm" placeholder="Search"></input>
                    <input type="submit" name="Submit"></input>
                </form>
            </div>
        )
    }
}
