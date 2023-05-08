import React, {  } from "react";
import Image from "next/image";
import FileDropZone from "@/components/Shared/FileDropZone";

export default function Home() {
  return (
    <section className="flex justify-center items-center w-full h-screen md:px-20">
      <div className="md:grid grid-cols-2 h-96 w-full">
        <FileDropZone/>
        <div className="relative">
          <Image src="/undraw-upload.svg" alt="Picture of file sharing" fill />
        </div>
      </div>
    </section>
  );
}
