import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import data from '../../data/members.json';
import ProfileCard from './ProfileCard/ProfileCard';
import GuildBoard from "./GuildBoard";
import meo_bg from '../../assets/meo_bg.png';
function FallingText({ text, startX, startY, startZ }) {
  const ref = useRef();
  const rotation = useRef([
    0.5 * Math.PI * 2,
    0.43 * Math.PI * 2,
    0.5 * Math.PI * 2,
  ]);
  const droppingSpeed = (Math.random() + 0.6) / 6;
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y -= droppingSpeed;
      if (ref.current.position.y < -10) {
        ref.current.position.y = 10 + Math.random() * 5;
      }
    }
  });

  return (
    <Text
      ref={ref}
      position={[startX, startY, startZ]}
      fontSize={0.5}
      rotation={rotation.current}
      anchorX="center"
      anchorY="middle"
    >
      <meshStandardMaterial
        color="hotpink"
        emissive="hotpink"
        emissiveIntensity={1.5}
        toneMapped={false} // to keep glow bright
      />
      {text}
    </Text>
  );
}

function Scene() {
  const names = data.members;

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {names.map((name, i) => (
        <FallingText
          key={i}
          text={name}
          startX={Math.random() * 20 - 10}
          startY={Math.random() * 10 + 5}
          startZ={Math.random() * -10}
                    // startX={Math.random() * 20 - 10}
          // startY={Math.random() * 10 + 5}
          // startZ={Math.random() * -10}
        />
      ))}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          intensity={1.5}
          radius={0.5}
        />
      </EffectComposer>
    </>
  );
}

export default function Members() {
  return (
    <div style={{ position: "relative", height: "80vh", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}  style={{backgroundImage: `url(${meo_bg})`, position: "absolute", top: 0, left: 0, zIndex: 0 }} shadows>
        <Scene />
      </Canvas>

      <div style={{ position: "relative", zIndex: 1, padding: "20px", color: "black" }}>
  
<GuildBoard/>
      </div>

    </div>
  );
}
