import React, { useEffect } from "react";
// import "./Raindrops.css";

const Raindrops = () => {
  useEffect(() => {
    const createRaindrop = () => {
      const raindrop = document.createElement("div");
      raindrop.className = "raindrop";
      raindrop.style.left = `${Math.random() * 100}vw`; // Random position
      raindrop.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`; // Random speed

      document.body.appendChild(raindrop);

      // Remove raindrop after it falls
      setTimeout(() => {
        raindrop.remove();
      }, 2000);
    };

    const interval = setInterval(createRaindrop, 50); // Create a raindrop every 50ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return null;
};

export default Raindrops;
