import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  // Create a reference for the canvas element
  const canvasRef = useRef(null);
  
  // Define the total number of frames in the image sequence
  const frameCount = 199;
  
  // Use a ref to cache the loaded images
  const imageCache = useRef([]);
  
  // Initialize an object to track the current frame in the sequence
  const imageSeq = { frame: 0 };

  useEffect(() => {
    // Get the canvas element from the reference
    const canvas = canvasRef.current;
    
    // Get the 2D drawing context for the canvas
    const context = canvas.getContext("2d");

    // Set the canvas width and height to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to load all images into the cache
    const loadImages = () => {
      for (let i = 0; i <= frameCount; i++) {
        const img = new Image();
        
        // Construct the image URL and assign it to the img src
        img.src = `https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/${String(
          i
        ).padStart(4, "0")}.jpg`;
        
        // Log image loading progress
        img.onload = () => {
          // Cache the loaded image
          imageCache.current[i] = img;
          
          // Render the first image as soon as it's loaded
          if (i === 0) {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        };
        
        // Log an error message if an image fails to load
        img.onerror = () => {
          console.error(`Failed to load image ${i}`);
        };
      }
    };

    // Function to render the current frame from the image sequence
    const render = () => {
      const img = imageCache.current[imageSeq.frame];
      if (img) {
        // Scale and draw the image on the canvas
        scaleImage(img, context);
      } else {
        console.warn(`Image for frame ${imageSeq.frame} is not available`);
      }
    };

    // Function to scale and center the image on the canvas
    const scaleImage = (img, ctx) => {
      const canvas = ctx.canvas;
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      // Clear the canvas before drawing the new image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the scaled image centered on the canvas
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Function to handle fallback rendering on scroll events
    const handleScroll = () => {
      const pageHeight = window.innerHeight * 2; // Total scrollable height
      const scrollTop = window.scrollY; // Current scroll position
      const scrollFraction = Math.min(scrollTop / pageHeight, 1); // Fraction of scroll completed
      
      // Determine the frame index based on scroll position
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      // Get the corresponding image from the cache
      const img = imageCache.current[frameIndex];
      if (img) {
        // Clear the canvas and draw the current image
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    // Load all images as soon as the component mounts
    loadImages();

    // Use GSAP to create a scroll-triggered animation
    gsap.to(imageSeq, {
      frame: frameCount - 1, // Animate through all frames
      snap: "frame", // Snap to the nearest frame
      ease: "power1.inOut", // Ease function for smoother animation
      scrollTrigger: {
        scrub: 0.15, // Smooth scrubbing as you scroll
        trigger: canvas, // Trigger the animation on the canvas element
        start: "top top", // Start when the top of the canvas reaches the top of the viewport
        end: "100% top", // End when the canvas has scrolled out of view
        pin: true, // Pin the canvas during the scroll-triggered animation

        // Call the render function on every update
        onUpdate: render,
      },
    });

    // Add a fallback scroll event listener for browsers not supporting GSAP
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners and kill all scroll triggers when the component unmounts
    return () => {
      ScrollTrigger.killAll();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Design Section */}
      <div className="bg-[#f5f5f7] h-full text-center flex flex-col justify-center items-center p-20">
        <h1 className="text-xl font-bold text-black mb-2">Design</h1>
        <h1 className="text-3xl font-bold text-black mb-2">Designed by Apple.</h1>
        <p className="text-xl text-black">
          Apple Vision Pro is the result of decades of experience designing
          high‑performance, mobile, and wearable devices — culminating in the
          most ambitious product Apple has ever created. Vision Pro integrates
          incredibly advanced technology into an elegant, compact form,
          resulting in an amazing experience every time you put it on.
          Enclosure. A singular piece of three-dimensionally formed laminated
          glass flows into an aluminum alloy frame that curves to wrap around
          your face. Light Seal. The Light Seal
        </p>
      </div>
      
      {/* Canvas Container */}
      <div className="relative w-full h-screen">
        <div className="h-[400vh]">
          {/* Canvas for image sequence animation */}
          <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
      
      {/* Placeholder for additional content */}
      <div className="relative w-full h-screen">
        <div className="h-[400vh]">
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>
    </>
  );
};

export default Vision;
