import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../Utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
    useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%", // Adjust as needed
        toggleActions: "play none none none", // On enter, play the animation
      },
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".link",
        start: "top 80%", // Adjust as needed
        toggleActions: "play none none none", // On enter, play the animation
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading" style={{ opacity: 0, transform: "translateY(20px)" }}>
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link" style={{ opacity: 0, transform: "translateY(20px)" }}>
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link" style={{ opacity: 0, transform: "translateY(20px)" }}>
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
export default Highlights;
