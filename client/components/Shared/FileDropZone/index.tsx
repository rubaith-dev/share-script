import React, { DragEvent, useEffect, useContext, ChangeEvent } from "react";
import Image from "next/image";
import { FileType, ACTIONS } from "../../../utils/types/index";
import { FileUploadContext } from "@/utils/reducers/index.r";

type Props = {};

const FileDropZone = (props: Props) => {
  const { files, dispatch } = useContext(FileUploadContext);

  console.log(files)


  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let inputFiles = e.dataTransfer.files;
    setFilesListInLocalState(inputFiles);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let inputFiles = e.target.files;
    if (inputFiles?.length) setFilesListInLocalState(inputFiles);
  };

  const setFilesListInLocalState = (fileList: FileList) => {
    const formattedList: any = [];
    Object.values(fileList).map((file, index) => {
      let id = `${file.size}.${Date.now()}.${file.name.replaceAll(" ", "_")}`;

      formattedList.push({ file, progress: 0, id });
    });

    dispatch({ type: ACTIONS.SET_FILES, payload: formattedList });
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
