import { compose } from 'redux'
import { connect } from 'react-redux'
import { keyUpdate } from '../actions/action'
import CustomCell from '../components/CustomCell'

export default compose(
    connect(
        state => {
            console.log('updating state for CustomCell');
            return {}
        },
        (dispatch) => ({
            onElementClick: (val,rowId) => {
                dispatch(keyUpdate(val,rowId));
            }
        }),
        (stateProps, dispatchProps, parentProps) => {
            return {
                data: parentProps.data,
                onElementClick: () => {dispatchProps.onElementClick(parentProps.data,parentProps.id)}
            }
        }
    ))(CustomCell);
