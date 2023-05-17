import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";
import Image from "next/image";
import FileDropZone from "@/components/Shared/FileDropZone";
import FilePreviewModal from "@/components/Shared/FilePreviewModal";

export interface FileUploadContextType {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

export const FileUploadContext = createContext<FileUploadContextType>({
  files: [],
  setFiles: () => {},
});

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUploadContext.Provider value={{ files, setFiles }}>
      <div className="flex justify-center items-center w-full h-screen md:px-20 relative overflow-hidden">
        <div className="md:grid grid-cols-2 h-[425px] w-full">
          <FileDropZone />
          <div className="relative">
            <Image
              src="/undraw-upload.svg"
              alt="Picture of file sharing"
              fill
            />
          </div>
        </div>

        <FilePreviewModal
          className={`absolute top-0 right-0 transform transition-all duration-500  ${
            files.length > 0 ? "translate-x-0" : "translate-x-0"
          }`}
        />
      </div>
    </FileUploadContext.Provider>
  );
}
