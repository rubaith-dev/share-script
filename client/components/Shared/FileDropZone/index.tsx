import React, { DragEvent, useEffect, useContext, ChangeEvent } from "react";
import Image from "next/image";
import { FileType, ACTIONS } from "../../../utils/types/index";
import { FileUploadContext } from "@/utils/reducers/index.r";
import axios from "axios";

type Props = {};

const FileDropZone = (props: Props) => {
  const { files, dispatch } = useContext(FileUploadContext);

  const handleFileChange = async () => {
    const CHUNK_SIZE = 5 * 1024 * 1024; // Chunk size (5MB in this example)

    const promises = files?.map(async ({ file, progress, id }) => {
      if (!file) {
        return;
      }

      

      const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
      let uploadedChunks = 0;
      for (let index = 0; index < totalChunks; index++) {

        const start = index * CHUNK_SIZE;
        const end = Math.min((index + 1) * CHUNK_SIZE, file.size);

        const chunk = file.slice(start, end);

        const formData = new FormData();
        formData.append("fileName", file.name);
        formData.append("index", String(index));
        formData.append("totalChunks", String(totalChunks));
        formData.append("data", chunk);

        try {
          await axios.post("http://localhost:8000/upload", formData);
          uploadedChunks++;
          dispatch({
            type: ACTIONS.SET_PROGRESS,
            payload: { id, progress: Number(uploadedChunks / totalChunks) },
          });

          console.log(
            `Chunk ${index + 1} of ${totalChunks} uploaded successfully.`
          );
        } catch (error) {
          console.error(`Failed to upload chunk ${index + 1}.`, error);
        }
      }
    });

    try {
      await Promise.all(promises);
      console.log("All chunks uploaded successfully.");
    } catch (error) {
      console.error("Failed to upload chunks.", error);
    }

    console.log("File splitting completed");
  };

  useEffect(() => {
    handleFileChange(); // Call handleFileChange whenever files state changes
  }, [files]);

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let inputFiles = e.dataTransfer.files;
    let fileList: FileType[] = [];
    if (inputFiles && inputFiles.length > 0) {
      Object.values(inputFiles).map((file, index) => {
        return fileList.push({ file, progress: 0, id: index + 1 });
      });
      dispatch({ type: ACTIONS.SET_FILES, payload: fileList });
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputFiles = e.target.files;
    let fileList: FileType[] = [];
    if (inputFiles && inputFiles.length > 0) {
      Object.values(inputFiles).map((file, index) =>
        fileList.push({ file, progress: 0, id: index + 1 })
      );
      dispatch({ type: ACTIONS.SET_FILES, payload: fileList });
    }
  };

  return (
    <div className="p-5 md:p-10 h-full">
      <div
        className="bg-white rounded-lg shadow-2xl h-full w-full p-7 group relative"
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className="border border-dashed border-blue-300 rounded-lg h-full px-5 relative">
          <label
            htmlFor="file-upload"
            className="absolute top-0 left-0 w-full h-full cursor-pointer flex flex-col"
          >
            <div className="relative h-24 w-full mt-10">
              <Image
                src="/file.svg"
                alt="Picture of file sharing"
                fill
                className="z-20"
              />
              <Image
                src="/file.svg"
                alt="Picture of file sharing"
                fill
                className="upload-icon-left"
              />
              <Image
                src="/file.svg"
                alt="Picture of file sharing"
                fill
                className="upload-icon-right"
              />
            </div>
            <div className="text-center mt-5">
              <span className="text-[#4c84c3] text-lg font-semibold">
                Click to upload or Drag and Drop
              </span>
            </div>
          </label>
          <input
            type="file"
            multiple
            id="file-upload"
            hidden
            onChange={onChange}
          />

          {/* <Loader /> */}
        </div>
      </div>
    </div>
  );
};

export default FileDropZone;
