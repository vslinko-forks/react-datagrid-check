import { compose } from 'redux'
import { connect } from 'react-redux'
import { keyUpdate } from '../actions/action'
import CustomCell from '../components/CustomCell'

export default compose(
    connect(
        null,
        {
            onElementClick: keyUpdate,
        }
        (stateProps, dispatchProps, parentProps) => ({
            data: parentProps.data,
            onElementClick: () => dispatchProps.onElementClick({data: parentProps.data, id: parentProps.id})
        })
    )
)(CustomCell);
