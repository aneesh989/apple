import React, { Suspense, lazy, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import lottieAnimation from './constants/loader.json'; // Adjust the path as needed
import { Analytics } from "@vercel/analytics/react"

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const Footer = lazy(() => import('./components/Footer'));
const HeroLightpass = lazy(() => import('./components/Airpods/Airpods'));
const Headphone = lazy(() => import('./components/Headphone/Headphone'));
const Vision = lazy(() => import('./components/VisionPro/Vision'));

const Loader = () => (
  <div style={loaderStyle}>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: lottieAnimation,
      }}
      height={300}
      width={300}
    />
  </div>
);

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#ffffff', // Adjust the background color as needed
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Adjust the delay as needed to ensure all components are loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {isLoaded ? (
        <main className="bg-black">
          <Navbar />
          <Vision />
          <Hero />
          <Highlights />
          <Headphone />
          <HeroLightpass />
          <Model />
          <Features />
          <Footer />
        </main>
      ) : (
        <Loader />
      )}
    </Suspense>
  );
};

export default App;
