import { createStore } from "redux";
import { FilePreview } from "../models/file-preview";
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

export interface RootState {
    explorer: boolean;
    files: (FilePreview & { route: string })[]
}

export default store;