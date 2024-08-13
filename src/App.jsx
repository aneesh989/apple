import React, { Suspense, lazy } from 'react';
import Lottie from 'react-lottie';
import lottieAnimation from './constants/loader.json'; // Adjust the path as needed

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
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default App;
