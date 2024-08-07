"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import MangoModel from "./MangoModel";
import LemonModel from "./LemonModel";
import { motion } from "framer-motion";
import { extend } from "@react-three/fiber";
extend({ OrbitControls, motion });

// export function CanSceneTransitionLeft() {
//   return (
//     <div className=" w-full h-full  flex flex-col ">
//       <Canvas
//         camera={{
//           fov: 75,
//           near: 0.1,
//           far: 1000,
//           position: [12, 0, 0],
//         }}
//       >
//         <ambientLight />
//         <spotLight position={[0, 0, 0]} angle={0.1} penumbra={1} />
//         <directionalLight color="red" position={[0, 0, 0]} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={false} enablePan={false} />
//         <Environment preset={"sunset"} />
//         <Suspense fallback={null}>
//           <MangoModel positiony={-8} positionx={-5} positionz={0} />
//           <MangoModel positiony={-8} positionx={-10} positionz={7.5} />
//           <MangoModel positiony={-8} positionx={-15} positionz={15} />
//           <MangoModel positiony={-8} positionx={-20} positionz={22.5} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// export function CanSceneTransitionRight() {
//   return (
//     <div className=" w-full h-full  flex flex-col ">
//       <Canvas
//         camera={{
//           fov: 75,
//           near: 0.1,
//           far: 1000,
//           position: [12, 0, 0],
//         }}
//       >
//         <ambientLight />
//         <spotLight position={[0, 0, 0]} angle={0.1} penumbra={1} />
//         <directionalLight color="red" position={[0, 0, 0]} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={false} enablePan={false} />
//         <Environment preset={"sunset"} />
//         <Suspense fallback={null}>
//           <LemonModel positiony={-8} positionx={-5} positionz={5} />
//           <LemonModel positiony={-8} positionx={-10} positionz={-2.5} />
//           <LemonModel positiony={-8} positionx={-15} positionz={-10} />
//           <LemonModel positiony={-8} positionx={-20} positionz={-17.5} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

export function LandingSceneLemon({ orbital }) {
  return (
    <div className=" w-full h-full  flex flex-col ">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [16, 0, -5],
        }}
      >
        <ambientLight />
        <spotLight position={[0, 5, 0]} angle={0.1} penumbra={1} />
        <directionalLight color="red" position={[0, 0, 0]} />
        <pointLight position={[10, 10, 10]} />
        {orbital ? (
          <OrbitControls enableZoom={false} enablePan={false} />
        ) : null}
        <Environment preset={"sunset"} />
        <Suspense fallback={null}>
          <LemonModel fast={"a"} positiony={-8} positionx={0} positionz={-2} />
          <MangoModel fast={"a"} positiony={-8} positionx={2} positionz={8} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function ReplaceScene(props) {
  return (
    <div className=" w-full h-full  flex flex-col ">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [16, 0, -5],
        }}
      >
        <ambientLight />
        <spotLight position={[0, 5, 0]} angle={0.1} penumbra={1} />
        <directionalLight color="red" position={[0, 0, 0]} />
        <pointLight position={[10, 10, 10]} />

        <Environment preset={"sunset"} />

        <Suspense fallback={null}>
          {props.scene === "mango" ? (
            <MangoModel fast={"a"} positiony={-8} positionx={0} positionz={1} />
          ) : (
            <LemonModel fast={"a"} positiony={-8} positionx={0} positionz={1} />
          )}
        </Suspense>
        {props.orbital ? <OrbitControls enableZoom={false} /> : null}
      </Canvas>
    </div>
  );
}
