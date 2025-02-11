// FloatingBubbles.jsx
import React, { useEffect } from "react";

const FloatingBubbles = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${Math.random() * 5 + 3}s`;

      document.body.appendChild(bubble);

      setTimeout(() => bubble.remove(), 5000);
    };

    const interval = setInterval(createBubble, 200);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FloatingBubbles;
