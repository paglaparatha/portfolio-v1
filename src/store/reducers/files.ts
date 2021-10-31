import { FilePreview } from '../../models/file-preview';
import Action from '../../models/action';
import { ADD_FILE, REMOVE_FILE } from '../constants';

const defaultState: (FilePreview & { route: string })[] = [];

export const filesReducer = (state = defaultState, action: Action) => {

    switch (action.type) {
        case ADD_FILE:
            if (state.some(el => el.fileName === action.payload.fileName))
                return state;
            return [...state, action.payload];

        case REMOVE_FILE:
            return state.filter(el => el.fileName !== action.payload.fileName);

        default:
            return state
    }
}