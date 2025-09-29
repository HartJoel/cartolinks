import { NAV_LINKS } from "@/constants";
import { Bell, BookImage, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/theme";

export default function Navbar() {
  return (
    <nav className="flexBetween h-14 px-4 border-b border-gray-200 bg-white dark:bg-black dark:border-gray-800 container-center">
      {/* LEFT */}
      <div className="flex">
        <Link href="/">
          <Image
            src="/krea-logo.webp"
            alt="logo"
            width={55}
            height={55}
            className="block dark:hidden"
          />
          <Image
            src="/logo-krea-ai.webp"
            alt="logo"
            width={55}
            height={55}
            className="hidden dark:block"
          />
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            HART JOEL
          </span>
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-2 bg-gray-200 py-1 px-1 rounded-xl dark:bg-[#262626] dark:border-[#27272A]">
        {NAV_LINKS.map(({ href, key, label, icon: Icon }) => (
          <li
            key={key}
            className="py-2 px-4 hover:bg-white dark:hover:bg-neutral-600 duration-300 rounded-xl transition"
          >
            <Icon className="icon" />
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="btn-nav-right">
          <BookImage className="icon" />
          Gallery
        </button>
        <button className="btn-nav-right">
          <Headset className="icon" />
          Support
        </button>
        <Bell className="icon" />
        <ModeToggle />
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400" />
      </div>
    </nav>
  );
}
