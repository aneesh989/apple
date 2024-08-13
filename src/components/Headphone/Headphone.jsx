import React, { useEffect, useState } from "react";
import { LogoH, Hgreen, Hblue, Hred, Hwhite, Hblack } from "../../Utils";

const images = [Hgreen, Hblue, Hred, Hwhite, Hblack];
const backgrounds = [
  "radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB686 92.19%)",
  "radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, #5F9CCF 100%)",
  "radial-gradient(50% 50% at 50% 50%, #FFB7B2 0%, #ED746E 100%)",
  "radial-gradient(50% 50% at 50% 50%, #D7D7D7 0%, #979797 100%)",
  "radial-gradient(50% 50% at 50% 50%, #6B6B6B 0%, #292929 100%)",
];

const Headphone = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="  relative z-10 min-h-[700px] flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden bg-gradient-radial from-[#C7F6D0] to-[#7CB686]">
      <div className="-translate-y-32 md:-translate-y-0 relative max-w-[525px] w-[90%] md:w-[50%] p-[5%] md:p-[100px]">
        <div className="mb-2 flex justify-center md:justify-start">
          <a href="#">
            <img src={LogoH} alt="Logo" className="w-[271px] h-auto" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start h-full text-center md:text-left">
          <h2 className="text-white text-[30px] md:text-[50px] font-black leading-tight mb-2 md:mb-5">
            Apple AirPods Max <br /> Wireless Over-Ear <br /> Headphones.
          </h2>
          <p className="text-white text-[16px] md:text-[18px] font-normal leading-[26px] md:leading-[35px] mb-5 md:mb-7">
            Active Noise Cancelling, Transparency Mode, Spatial Audio,
            <br />
            Digital Crown for Volume Control. Bluetooth <br /> Headphones for
            iPhone
          </p>
          <h3 className="text-white text-[40px] md:text-[50px] font-black leading-tight mb-5 md:mb-10">
            $549
          </h3>
        </div>
      </div>
      <div className="relative w-[90%] md:w-[50%] h-full top-0">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute w-auto h-full max-w-[593px] max-h-[779px] min-h-[320px] transition-all duration-[2000ms] object-cover ${
              index === imageIndex
                ? "z-10 opacity-100 blur-none transform scale-100 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
                : index ===
                  (imageIndex - 1 + images.length) % images.length
                ? "opacity-100 blur-[25px] left-[95%] top-[90%] transform scale-[0.3] translate-y-[-50%]"
                : index === (imageIndex + 1) % images.length
                ? "opacity-100 blur-[35px] left-[100%] top-[10%] transform scale-[0.3] translate-y-[-50%]"
                : "opacity-0 blur-[35px] left-[100%] top-[100%] transform scale-[0.3] translate-x-[10%] translate-y-[10%]"
            }`}
            src={image}
            alt={`Headphone ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full top-0 z-[-1]">
        {backgrounds.map((background, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[2000ms]"
            style={{
              opacity: index === imageIndex ? 1 : 0,
              background: background,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Headphone;
