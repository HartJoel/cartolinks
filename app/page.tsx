import ScrollCarousel from "@/components/Carosel";
import GeneratePage from "@/components/Generate";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ScrollCarousel />
      <GeneratePage />
    </>
  );
}
