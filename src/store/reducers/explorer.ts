import Action from "../../models/action";
import { TOGGLE_EXPLORER } from '../constants/index';

const defaultState = true;

const explorerReducer = (state = defaultState, action: Action) => {
    if (action.type === TOGGLE_EXPLORER)
        return !state;
    else
        return state;
}

export default explorerReducer;