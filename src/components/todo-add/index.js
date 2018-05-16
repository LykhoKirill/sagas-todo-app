import React, { Component } from 'react'
import './styles.css'

export default class TodoAdd extends Component {
    state = {
        value: '',
    }

    handleChange = (e) => this.setState({ value: e.target.value })
    
    onClick = () => {
        if (!Boolean(this.state.value.trim())) {
            return
        }

        this.props.handleSubmit(this.state.value.trim())
        this.setState({ value: '' })
    }

    render() {
        return (
            <div className='todo-add-wrapper'>
                <input
                    type='text'
                    className='todo-add-input'
                    onChange={this.handleChange}
                    value={this.state.value}             
                />
                <button
                    className='todo-add-submit'
                    onClick={this.onClick}
                >
                    Add
                </button>
            </div>
        )
    }
}