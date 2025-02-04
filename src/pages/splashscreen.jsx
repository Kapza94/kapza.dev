import React, { useEffect, useState } from "react";
// import "./SplashScreen.css"; // Optional: For styling

const SplashScreen = ({ onLoadingComplete }) => {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "こんにちは",
    "안녕하세요",
    "Olá",
    "Привет",
    "مرحبا",
    "你好",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 200); // Change greeting every 1 second

    // Hide the splash screen after a delay
    const timer = setTimeout(() => {
      onLoadingComplete();
      clearInterval(interval);
    }, 2000); // Hide after 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="splash-screen">
      <h1 className="greeting">{greetings[currentIndex]}</h1>
    </div>
  );
};

export default SplashScreen;
