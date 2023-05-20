import React, { createContext, useReducer, Dispatch } from "react";
import Image from "next/image";
import FileDropZone from "@/components/Shared/FileDropZone";
import FilePreviewModal from "@/components/Shared/FilePreviewModal";
import { filesInitialState } from "@/utils/types";
import { reducer, FileUploadContext } from "@/utils/reducers/index.r";

export default function Home() {
  const [files, dispatch] = useReducer(reducer, filesInitialState);

  return (
    <FileUploadContext.Provider value={{ files, dispatch }}>
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
