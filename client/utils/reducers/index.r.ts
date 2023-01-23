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
      console.log(action)
      return files.map((file) => {
        if (action.payload.id === file?.id) {
          return { ...file, progress: (action.payload.progress*100).toFixed(0) };
        } else {
          return file;
        }
      });
    default:
      return files;
  }
}

export const FileUploadContext = createContext<FileUploadContextType>({
  files: filesInitialState,
  dispatch: () => {},
});
