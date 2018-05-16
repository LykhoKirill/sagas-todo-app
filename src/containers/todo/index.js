import { connect } from 'react-redux'

import Todo from '../../components/todo'
import { handleDelete, handleToggle } from '../../sagas/todo/actions'

const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (id) => dispatch(handleDelete(id)),
        handleToggle: (id) => dispatch(handleToggle(id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)