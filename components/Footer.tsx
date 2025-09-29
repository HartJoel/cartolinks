import Image from "next/image";

function Footer() {
  return (
    <footer className=" bg-[#262626] text-white px-6 md:px-10 py-6 flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
      {/* Left side - Krea AI branding */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo-krea-ai.webp"
          alt="logo"
          width={45}
          height={45}
          className="w-10 h-10 md:w-[55px] md:h-[55px]"
        />
        <span className="text-lg md:text-xl font-semibold tracking-tight">
          Krea AI
        </span>
      </div>

      {/* Right side - Curated by Mobbin */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-gray-400 text-sm md:text-base">
        <span className="text-base md:text-xl text-white">curated by</span>
        <a
          href="#"
          className="flex items-center gap-2 text-white font-semibold text-base md:text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          <Image
            src="/mobbin.webp"
            alt="logo"
            width={150}
            height={40}
            className="w-[120px] md:w-[200px] h-auto"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
