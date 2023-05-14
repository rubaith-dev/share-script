import { useContext } from "react";
import { FileUploadContext, FileUploadContextType } from "@/pages";

type Props = { className: string };

const FilePreviewModal = ({ className }: Props) => {
  const { files,setFiles } = useContext(FileUploadContext);

  return (
    <div
      className={`${className} w-1/4 h-full bg-black opacity-90 z-30 rounded-l-md text-white overflow-y-auto`}
    >
      <p onClick={()=>setFiles([])}>Clear</p>
      <div className="w-full flex flex-col p-5 gap-4">
        {files.map((file, index) => {
          return (
            <p key={index} className="border p-3 w-full rounded-md break-words truncate">
              {file.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreviewModal;
