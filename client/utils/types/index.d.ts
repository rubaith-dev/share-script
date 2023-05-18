export interface FileType {
  id: number;
  file: File | null;
  progress: number;
}

export interface FileActionType {
  type: string;
  payload: any;
}

export interface FileUploadContextType {
  files: FileType[];
  dispatch: React.Dispatch<FileActionType> | (() => {});
}

export enum ACTIONS {
  SET_FILES = "set-files",
  SET_PROGRESS = "set-progress",
}

export const filesInitialState: FileType[] = [];
