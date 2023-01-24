import { useContext, useState, useEffect } from "react";
import { FileUploadContext } from "@/utils/reducers/index.r";
import { Line, Circle } from "rc-progress";
import { ACTIONS } from "../../../utils/types/index";
import axios from "axios";

type Props = { className: string };

const FilePreviewModal = ({ className }: Props) => {
  const { files, dispatch } = useContext(FileUploadContext);

  const handleFileChange = async () => {
    for (const { file, progress, id } of files) {
      if (!file) {
        continue;
      }
  
      const formData = new FormData();
      formData.append("data", file);
      formData.append("fileName", file.name);
      formData.append("fileSize", String(file.size));
  
      try {
        const response = await axios.post(
          "http://localhost:8080/upload/initiate",
          formData,
          {
            onUploadProgress: (data) => {
              dispatch({
                type: ACTIONS.SET_PROGRESS,
                payload: { id, progress: data.progress },
              });
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      className={`${className} w-1/4 h-full bg-gray-900 z-30 text-white overflow-y-auto`}
    >
      <p
        onClick={() => handleFileChange()}
        className="cursor-pointer bg-white text-black m-4"
      >
        upload
      </p>
      <div className="w-full flex flex-col p-5 gap-4">
        {files.map((file, index) => {
          return (
            <div key={index} className="flex">
              <p className="p-3 w-full rounded-md break-words truncate">
                {file.file?.name}
              </p>
              <div className="w-12 h-12 grid place-items-center relative">
                <Circle
                  percent={file.progress}
                  strokeWidth={8}
                  strokeColor="#D3D3D3"
                  transition="all 1s ease"
                />
                <div className="absolute text-[11px]">{file.progress}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreviewModal;
