/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane003_1: THREE.Mesh;
    Plane003_2: THREE.Mesh;
    Plane003_3: THREE.Mesh;
    Circle: THREE.Mesh;
    Plane017: THREE.Mesh;
    Plane019_1: THREE.Mesh;
    Plane019_2: THREE.Mesh;
    Plane019_3: THREE.Mesh;
    Plane019_4: THREE.Mesh;
    Cube004: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane007: THREE.Mesh;
    Vert001_1: THREE.Mesh;
    Vert001_2: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle002: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Sphere001: THREE.Mesh;
    Plane013_1: THREE.Mesh;
    Plane013_2: THREE.Mesh;
    Plane013: THREE.Mesh;
    Plane014: THREE.Mesh;
    Text: THREE.Mesh;
    Plane016: THREE.Mesh;
    Plane015: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane014_1: THREE.Mesh;
    Plane014_2: THREE.Mesh;
    Plane014_3: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane022: THREE.Mesh;
    Plane023: THREE.Mesh;
    Plane024: THREE.Mesh;
    Plane025: THREE.Mesh;
    Plane026: THREE.Mesh;
    Plane028_1: THREE.Mesh;
    Plane028_2: THREE.Mesh;
    Circle003_1: THREE.Mesh;
    Circle003_2: THREE.Mesh;
    Circle003_3: THREE.Mesh;
    Plane027: THREE.Mesh;
    Plane028: THREE.Mesh;
    Plane027_1: THREE.Mesh;
    Plane027_2: THREE.Mesh;
    Plane027_3: THREE.Mesh;
    Circle005_1: THREE.Mesh;
    Circle005_2: THREE.Mesh;
    Circle005_3: THREE.Mesh;
    Circle004_1: THREE.Mesh;
    Circle004_2: THREE.Mesh;
    Circle004_3: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    monitor: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    ["monitor 2"]: THREE.MeshStandardMaterial;
    ["monitor 2"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    white: THREE.MeshStandardMaterial;
    gray: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.021"]: THREE.MeshPhysicalMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshPhysicalMaterial;
    ["Material.010"]: THREE.MeshPhysicalMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshPhysicalMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshPhysicalMaterial;
    ["Material.002"]: THREE.MeshPhysicalMaterial;
    ["Material.020"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshPhysicalMaterial;
    ["Material.018"]: THREE.MeshPhysicalMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/desk.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Material}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.monitor}
        position={[0.03356457, 0.14210699, -0.52303952]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.03963864}
      >
        <group
          position={[0.05860117, 0.81559139, 0]}
          rotation={[0, 0, 0.0800984]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials.monitor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials.screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_3.geometry}
            material={materials["monitor 2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["monitor 2"]}
            position={[0.02197181, -0.48993027, 0.00256104]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.04863328}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Material.003"]}
        position={[-0.03353208, 0.08647857, 0.32486469]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.79612279}
      >
        <group position={[0, 0.07037701, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_1.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_2.geometry}
            material={materials.gray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_3.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_4.geometry}
            material={materials["Material.021"]}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.monitor}
        position={[0.8353402, 0.08647905, 0.36437136]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.83962446}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["monitor 2"]}
        position={[1.45339549, 0.22842926, 0.10982829]}
        rotation={[0, -0.10328055, -0.03763998]}
        scale={[0.80812788, 0.80812806, 0.80812806]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.white}
          position={[0.05433597, 0, 0.00000545]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.004"]}
        position={[1.45339549, 0.40510201, 0.10982829]}
        rotation={[0, 0.48690057, -0.03763999]}
        scale={[0.80812776, 0.80812806, 0.80812782]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.white}
          position={[0.05433592, 0, 0.00000545]}
        />
      </mesh>
      <group
        position={[-1.22145462, 0.16152531, -0.38904437]}
        rotation={[0, 0.39573922, 0]}
        scale={0.92304391}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001_1.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001_2.geometry}
          material={materials.green}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.004"]}
        position={[-1.63294244, 0.14216447, 0.21905458]}
        rotation={[Math.PI, -1.5449587, Math.PI]}
        scale={1.04151595}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials["Material.007"]}
          position={[0, -0.02102365, 0]}
          scale={1.20172536}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["monitor 2"]}
          position={[0, -0.07800691, 0]}
          rotation={[0, -0.57025736, 0]}
          scale={1.4626112}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials["Material.007"]}
            position={[-0.00001887, -0.09578693, 0]}
            scale={[1.19771624, 1.19771612, 1.19771624]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["monitor 2"]}
            position={[0.00009599, 0.48446569, 0]}
            rotation={[2.37581816, 0.33026818, 0.03882623]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder003.geometry}
              material={materials["Material.004"]}
              position={[0.00998116, -0.37724447, -0.02863082]}
              rotation={[-1.54374637, 0.02954385, -0.33119285]}
              scale={[1.04511786, 1.04511774, 1.04511786]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={materials["Material.009"]}
            position={[0.01409751, 0.6561271, -0.368296]}
            scale={[0.07469177, 0.07469176, 0.07469177]}
          />
        </mesh>
      </mesh>
      <group
        position={[1.00173974, 0.6032635, -0.104406]}
        rotation={[1.45324401, -0.75685279, 0.02012337]}
        scale={[1.60423172, 1.60423136, 1.60423172]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.005"]}
        position={[1.56828856, 0.37262312, 0.36281472]}
        rotation={[2e-8, -1.04105451, -0.48933671]}
        scale={0.53335762}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.004"]}
        position={[1.46934271, 0.16280495, 0.37895411]}
        rotation={[3.4e-7, -1.55058987, -0.48933679]}
        scale={0.53335762}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.013"]}
        position={[-0.17448598, 2.14618778, -0.1849931]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.21554875}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Material.016"]}
        position={[1.13256252, 1.29896069, -0.1812121]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.16846269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.002"]}
        position={[1.23550022, 1.37089944, -0.17181531]}
        rotation={[1.56833414, -1.57053488, 0]}
        scale={[0.78912234, 0.78912234, 0.78912228]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Material.010"]}
        position={[1.23550022, 1.45535684, -0.17181531]}
        rotation={[1.56833414, -1.57053488, 0]}
        scale={[0.78912234, 0.78912234, 0.78912228]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials["Material.014"]}
        position={[-0.0313281, 2.19177246, -0.17714797]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.21806838}
      />
      <group
        position={[0.52289414, 2.71150732, -0.34766665]}
        rotation={[1.57191613, -Math.PI / 2, 0]}
        scale={0.06135914}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_1.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_2.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_3.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.010"]}
        position={[1.17510915, 2.50307512, -0.33449575]}
        rotation={[1.56833414, -1.57053488, 0]}
        scale={[1.07220066, 1.07220066, 1.07220042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials["Material.011"]}
        position={[1.72945929, 1.00805652, 0.1497525]}
        rotation={[-1.30955029, -1.55741676, -1.30424067]}
        scale={[0.43430939, 0.43430954, 0.43430936]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials["Material.016"]}
        position={[-0.69611424, 0.89538461, -0.01206946]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.73123157}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials["Material.015"]}
        position={[-0.68481225, 0.82798845, -0.00576651]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.21925312, -0.21925336, -0.21925336]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials["Material.002"]}
        position={[1.17510915, 2.50307512, -0.33449575]}
        rotation={[1.56833414, -1.57053488, 0]}
        scale={[1.07220066, 1.07220066, 1.07220042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["Material.017"]}
        position={[1.7289176, 1.01169193, 0.13874775]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.23052835, -0.23052841, -0.23052841]}
      />
      <group
        position={[-1.20521975, 1.98730862, -0.79111922]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.96938318}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_1.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_2.geometry}
          material={materials["Material.002"]}
        />
        <group
          position={[-0.66685796, -0.00000889, -0.85025376]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_2.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_3.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={materials["Material.010"]}
          scale={1.02079284}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={nodes.Plane028.material}
          position={[-0.48812723, 0.00689459, -0.54674047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.91618782}
        />
        <group
          position={[-0.37462127, 0.00689459, -0.54674047]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.91618782}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027_1.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027_2.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027_3.geometry}
            material={materials["Material.020"]}
          />
        </group>
      </group>
      <group
        position={[0.71617448, 1.74587703, -0.17077032]}
        scale={0.82710952}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_2.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_3.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group
        position={[0.49101472, 2.91943932, -0.33169726]}
        scale={0.90791482}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_1.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_2.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_3.geometry}
          material={materials["Material.015"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/desk.glb");
