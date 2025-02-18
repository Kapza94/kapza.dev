// import { Button } from "@/components/ui/button";
import Experience from "./experience";
import Hero from "./hero";
import Nav from "./nav";
import SplashScreen from "./splashscreen";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Nav />
      <Hero />
      <Experience />
    </>
  );
}
