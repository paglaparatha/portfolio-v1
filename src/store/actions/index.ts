import { ADD_FILE, REMOVE_FILE, TOGGLE_EXPLORER } from "../constants";
import Action from "../../models/action";
import { FilePreview } from "../../models/file-preview";

export const toggleExplorer = (): Action => ({
  type: TOGGLE_EXPLORER,
});

export const addFile = (payload: FilePreview & { route: string }): Action => ({
  type: ADD_FILE,
  payload,
});

export const removeFile = (
  payload: FilePreview & { route: string }
): Action => ({
  type: REMOVE_FILE,
  payload,
});

export const updateRoute = () => ({});
