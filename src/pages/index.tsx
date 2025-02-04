// import { Button } from "@/components/ui/button";
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
    <div>
      <Nav />
    </div>
  );
}
