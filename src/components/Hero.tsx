import Image from "next/image";
import banner from "@/images/bannerImg.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={banner}
        alt="banner image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-6xl lg:text-[100px] font-serif">Masud Shaikh</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Student, Developer...
        </p>
      </div>
    </div>
  );
};

export default Hero;
