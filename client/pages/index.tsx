import React, { DragEvent } from "react";
import Image from "next/image";
import Wave from "react-wavify";

import CloudProgressBar from "@/components/Shared/CloudProgressBar";

export default function Home() {
  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // console.log(e)
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <section className="flex justify-center items-center w-full h-screen md:px-20">
      <div className="md:grid grid-cols-2 h-96 w-full">
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

              <div className="relative h-16 w-full rounded-full mt-4 bg-[#323144] overflow-hidden px-2 py-1">
                {/* <CloudProgressBar className="w-24 h-24"/> */}

                {/* <Wave
                  fill="#6DB1FF"
                  paused={false}
                  options={{ amplitude: 3, speed: 0.20, points: 2, height:10 }}
                 
                /> */}

            <div className="w-[56px] h-[56px] rounded-full absolute left-[1%] -translate-x-[1%] bg-white">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src="/undraw-upload.svg" alt="Picture of file sharing" fill />
        </div>
      </div>
    </section>
  );
}
