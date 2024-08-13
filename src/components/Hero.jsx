import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../Utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1,y:150, delay: 1.5,scrollTrigger: {
      scrub: 0.15, 
      trigger: ".hero-title",
      start: '-10% bottom', 
    }})
    gsap.to('#cta',{opacity:1,y:-50,delay:2,scrollTrigger: {
      scrub: 0.15, 
      trigger: "#cta",
      start: '-10% bottom', 
    }})
  }, []);
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title ">iphone 16 </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="translate-y-20 md:translate-y-0 flex flex-col items-center opacity-0 ">
        <a href="#highlights" className="btn">
            Buy
        </a>
        <p className="font-normal text-xl">
            From $199/month or $999
        </p>
      </div>
    </section>
  );
};
export default Hero;
