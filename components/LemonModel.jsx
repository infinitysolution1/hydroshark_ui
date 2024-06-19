/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 model.gltf 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function LemonModel(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/model_lemon/model.gltf");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    props.fast
      ? ref.current.rotation.set(-0.1, -t, 0.1)
      : ref.current.rotation.set(-0.1, t / 2, 0.1);
    ref.current.position.y = props.positiony;
    ref.current.position.x = props.positionx;
    ref.current.position.z = props.positionz;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.lemon_can.geometry} material={materials.can} />
      <mesh geometry={nodes.lemon_can_1.geometry} material={materials.inage} />
    </group>
  );
}

useGLTF.preload("/model.gltf");
