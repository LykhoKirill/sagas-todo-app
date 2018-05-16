import { connect } from 'react-redux'

import TodoAdd from '../../components/todo-add'
import { handleSubmit } from '../../store/todo-add/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (value) => dispatch(handleSubmit(value))
    }
}

export default connect(null, mapDispatchToProps)(TodoAdd)