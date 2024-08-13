import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css'; 
gsap.registerPlugin(ScrollTrigger);

const HeroLightpass = () => {
  const cRef = useRef(null);
  const frameCount = 147;
  const images = useRef([]);
  const airpods = useRef({ frame: 0 });

  const currentFrame = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
  );

  useEffect(() => {
    const canvas = cRef.current;
    const context = canvas.getContext('2d');

    canvas.width = 1158;
    canvas.height = 770;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.current.push(img);
    }

    gsap.to(airpods.current, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: "bounce.out",
      scrollTrigger: {
        scrub: true,
        toggleActions: 'play pause reverse restart',
        start: '40% bottom',
      },
      onUpdate: render,
    });

    images.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current[airpods.current.frame], 0, 0);
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <canvas
        ref={cRef}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
      />
    </div>
  );
};

export default HeroLightpass;
