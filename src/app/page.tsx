// import Image from "next/image";

import { Star } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-500 px-5 md:px-10 lg:px-18 py-7 hero-background">
      <div className="h-max lg:h-[70vh] flex flex-col gap-7 mb-5 lg:mb-0 items-center justify-center">
        {/* ai powered */}
        <div className="py-1 mb-2 flex items-center px-4 rounded-full text-[10px] font-medium border-gray-400 hover:border-gray-600 text-[#5044E5] bg-gray-200">
          <span>AI POWERED</span>
          <Star className="ml-1 h-2 w-2 animate-pulse" />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center leading-tight">
          <span className="text-[#5044E5]">BLOG</span> THE HOT THOUGHT <br />{" "}
          YOU`VE GOT
        </h1>
        <p className="text-gray-500 text-sm text-center leading-tighter max-w-sm md:max-w-xl">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it`s one word or a thousand, your story
          starts right here
        </p>
        <div className="relative px-2 flex items-center gap-0.5 py-0.3 mt-2 focus:border-[#5044E5] border border-gray-900 h-12 w-[90%] md:w-xl rounded-[9px] bg-white text-black">
          <input type="text" placeholder="search blogs" className="border-none outline-none focus-none h-full absolute left-3" />
          <button className="px-6 py-2 bg-[#5044E5] text-white text-sm rounded-[9px] absolute right-1">Search</button>
        </div>
      </div>
    </section>
  );
}
