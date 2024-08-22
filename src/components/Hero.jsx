import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo } from "../Utils";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      y: 50,
      delay: 1.5,
      scrollTrigger: {
        scrub: true,
        trigger: ".hero-title",
        start: "-10% bottom",
      },
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
      scrollTrigger: {
        scrub: true,
        trigger: "#cta",
        start: "-10% bottom",
      },
    });
  }, []);

  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 16</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            key={heroVideo}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="  flex flex-col items-center opacity-0">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
