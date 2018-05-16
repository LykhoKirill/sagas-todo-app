import React, { Component } from 'react'

import Todo from '../../containers/todo'
import './styles.css'

function TodosStub() {
    return (
        <div className='todo-list-stub'>your todos will be here</div>
    )
}

export default class TodoList extends Component {
    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        if (this.props.todos.length === 0) {
            return <TodosStub />
        }

        return (
            <div className='todo-list-wrapper'>
                {this.props.todos.map(todo => <Todo key={todo.id} {...todo} /> )}
            </div>
        )
    }
}