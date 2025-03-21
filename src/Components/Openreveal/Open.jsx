import React, { useRef, useEffect, startTransition } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { gsap } from "gsap";
import "./Open.css";
import imagelogo from '../Images/logo.jpg';

const RevealCard = () => {
  const planeRef = useRef();

  // Load the texture
  const texture = useLoader(TextureLoader, imagelogo);

  // Initial GSAP animation
  useEffect(() => {
    if (planeRef.current) {
      startTransition(() => {
        gsap.from(planeRef.current.scale, {
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power3.inOut",
        });

        gsap.from(planeRef.current.rotation, {
          y: Math.PI,
          duration: 1.5,
          ease: "power3.inOut",
        });
      });
    }
  }, []);

  return (
    <Canvas className="canvas-container">
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={2} />
      <mesh ref={planeRef}>
        <planeGeometry args={[3.5, 5, 40, 40]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Rotation planeRef={planeRef} />
    </Canvas>
  );
};

const Rotation = ({ planeRef }) => {
  useFrame(() => {
    if (planeRef.current) {
      planeRef.current.rotation.y += 0.005;
    }
  });
  return null;
};

export default RevealCard;