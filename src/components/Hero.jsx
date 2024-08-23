import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { heroVideo } from "../Utils";
import { animateWithGsap } from "../Utils/animations";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    animateWithGsap('.hero-title', {
      y: 50,
      opacity: 1,
      ease: "power3.out",
      duration: 1,
    });
    animateWithGsap('#cta', {
      opacity: 1,
      y: -50,
      
    });

    const videoElement = document.getElementById('hero-video');
    videoElement.setAttribute('src', heroVideo);

    // Manually fetch video to improve load time
    fetch(heroVideo)
      .then(response => response.blob())
      .then(blob => {
        videoElement.src = URL.createObjectURL(blob);
        videoElement.play();
      });
  }, []);

  return (
    <section className="bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 16</p>
        <div className="w-full">
          <video
            id="hero-video"
            className="pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
