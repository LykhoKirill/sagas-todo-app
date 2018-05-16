import React from 'react'

import TodoAdd from '../../containers/todo-add'
import TodoList from '../../containers/todo-list'
import './styles.css'
import './normalize.css'

export default function App() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='header'>Todos</div>
                <TodoAdd />
                <TodoList />
            </div>
        </div>
    )
}