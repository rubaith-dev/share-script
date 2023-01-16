import React, { DragEvent, useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/components/Shared/Loader";

type Props = {};

const FileDropZone = (props: Props) => {
  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="p-5 md:p-10 h-full">
      <div
        className="bg-white rounded-lg shadow-2xl h-full p-7 group"
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className="border border-dashed border-blue-300 rounded-lg h-full px-5">
          <div className="relative h-24 mt-10">
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

          <Loader />
        </div>
      </div>
    </div>
  );
};

export default FileDropZone;
