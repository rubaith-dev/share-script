import { useContext, useState, useEffect } from "react";
import { FileUploadContext, FileUploadContextType } from "@/pages";
import { Line, Circle } from "rc-progress";

type Props = { className: string };

const FilePreviewModal = ({ className }: Props) => {
  const { files, setFiles } = useContext(FileUploadContext);
  const [progressbar, setProgressbar] = useState(100);

  return (
    <div
      className={`${className} w-1/4 h-full bg-gray-900 z-30 text-white overflow-y-auto`}
    >
      <p onClick={() => setFiles([])}>Clear</p>
      <div className="w-full flex flex-col p-5 gap-4">
        {files.map((file, index) => {
          return (
            <div key={index} className="flex">
              <p className="p-3 w-full rounded-md break-words truncate">
                {file.name}
              </p>
              <div className="w-12 h-12 grid place-items-center relative">
                <Circle percent={progressbar} strokeWidth={8} strokeColor="#D3D3D3" transition="all 1s ease" />
                <div className="absolute text-[11px]">
                  {progressbar}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreviewModal;
