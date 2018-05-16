import { connect } from 'react-redux'

import TodoList from '../../components/todo-list'
import { selectTodos } from '../../selectors'
import { getTodos } from '../../store/todo-list/actions'

const mapStateToProps = state => {
    return {
        todos: selectTodos(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTodos: () => dispatch(getTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)