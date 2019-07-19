import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        search: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.search)
        event.target.reset()
    }

    render() {
        console.log(this.state, "Render from GitSearch")
        return (
            <div>
                <form onSubmit = {this.handleOnSubmit}>
                    <input
                    onChange={this.handleChange}
                    type="text"
                    name="search">
                    </input>
                    <input
                    type="submit"
                    name="Submit">
                    </input>
                </form>
            </div>
        )
    }
}
