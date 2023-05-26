import { useContext, useState, useEffect } from "react";
import { FileUploadContext } from "@/utils/reducers/index.r";
import { Line, Circle } from "rc-progress";
import { ACTIONS } from "../../../utils/types/index";
import axios from "axios";
import {Buffer} from "buffer"


type Props = { className: string };

const FilePreviewModal = ({ className }: Props) => {
  const { files, dispatch } = useContext(FileUploadContext);

  const handleFileChange = async () => {
    const CHUNK_SIZE = 5* 1024*1024; // Chunk size (5MB in this example)

    files?.map(async ({ file, progress, id }) => {
      if (!file) {
        return;
      }

      const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

      const start = 0;
      const end = Math.min(CHUNK_SIZE, file.size);

      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append("data", chunk);
      formData.append("fileName", file.name);
      formData.append("fileSize", String(file.size));
      formData.append("totalChunks", String(totalChunks));

      const response = await axios.post(
        "http://localhost:8080/upload/initiate",
        formData
      );
      console.log(response);

      let uploadedChunks = 0;
      // for (let index = 0; index < totalChunks; index++) {
      //   const start = index * CHUNK_SIZE;
      //   const end = Math.min((index + 1) * CHUNK_SIZE, file.size);

      //   const chunk = file.slice(start, end);

      //   const formData = new FormData();
      //   formData.append("fileName", file.name);
      //   formData.append("index", String(index));
      //   formData.append("totalChunks", String(totalChunks));
      //   formData.append("data", chunk);

      //   // try {
      //   //   await axios.post("http://localhost:8000/upload", formData);
      //   //   uploadedChunks++;
      //   //   dispatch({
      //   //     type: ACTIONS.SET_PROGRESS,
      //   //     payload: { id, progress: Number(uploadedChunks / totalChunks) },
      //   //   });
      //   // } catch (error) {
      //   //   console.error(`Failed to upload chunk ${index + 1}.`, error);
      //   }
      // }
    });

    // try {
    //   await Promise.all(promises);
    //   console.log("All chunks uploaded successfully.");
    // } catch (error) {
    //   console.error("Failed to upload chunks.", error);
    // }
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
