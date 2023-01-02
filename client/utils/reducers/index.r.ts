import { createContext } from "react";
import {
  FileType,
  FileActionType,
  ACTIONS,
  filesInitialState,
  FileUploadContextType,
} from "../types";

export function reducer(files: FileType[], action: FileActionType) {
  switch (action.type) {
    case ACTIONS.SET_FILES:
      return [...files, ...action.payload];

    case ACTIONS.SET_PROGRESS:
      console.log(files)
    default:
      return files;
  }
}

export const FileUploadContext = createContext<FileUploadContextType>({
  files: filesInitialState,
  dispatch: () => {},
});
