import React, { Component } from 'react'
import cx from 'classnames'

import './styles.css'

export default class Todo extends Component {
    render () {
        const { id, status, text, handleToggle, handleDelete } = this.props
        return (
            <div className={cx('todo-wrapper', {
                'todo-wrapper-active ': status === 'active',
                'todo-wrapper-complete': status === 'complete',
            })}>
                <button
                    className={cx('todo-button', {
                        'toggle-active': status === 'active',
                        'toggle-complete': status ==='complete'
                    })}
                    onClick={() => handleToggle(id)}
                />
                <div className={cx('todo-text', {
                    'text-complete': status ==='complete'
                })}>
                        {text}
                </div>
                <button
                    className={cx('todo-delete-button', 'todo-button')}
                    onClick={() => handleDelete(id)}
                />
            </div>
        )
    }
}