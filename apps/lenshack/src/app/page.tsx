import Image from "next/image";

import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <div className="h-screen bg-[#2c2d31] text-white flex flex-col items-center py-16">
      <div className=" h-fit w-fit grid-rows-1 mb-6">
        <Image
          className="rounded-lg"
          src="/lens_logo.jpg"
          alt="lens"
          width={100}
          height={100}
        />
        <div className="text-clip bg-clip-text bg-gradient-to-r from-pink-100 to-white text-center text-2xl my-2 font-semibold">
          Lens AI
        </div>
      </div>
      <ChatWindow />
    </div>
  );
}
