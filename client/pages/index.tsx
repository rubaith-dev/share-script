import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="grid grid-cols-2">
      <div className="border p-10">
        <div className="border h-full"></div>
      </div>
      <div className="relative">
        <Image
          src="/undraw-upload.svg"
          alt="Picture of file sharing"
          fill
          
        />
      </div>
    </section>
  );
}
