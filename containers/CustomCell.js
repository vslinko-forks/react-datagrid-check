import { compose } from 'redux'
import { connect } from 'react-redux'
import { keyUpdate } from '../actions/action'
import CustomCellData from '../components/CustomCell'

let state_is_changed=false;
export default compose(
    connect(
        state => {
            if (state.reducer != "") {
                state_is_changed=true;
                state.reducer="";
            }
            return {
                grid: {}
            }
        },
        (dispatch) => ({
            onElementClick: (grid) => {
                dispatch(keyUpdate(grid));
            }
        }),
        (stateProps, dispatchProps, parentProps) => {
            console.log(parentProps.grid);
            let ret = {
                data: parentProps.data,
                state_is_changed: state_is_changed,
                grid: parentProps.grid,
                onElementClick: () => {dispatchProps.onElementClick(parentProps.grid)}
            };
            if (state_is_changed) state_is_changed=false;
            return ret;
        }
    ))(CustomCellData);
