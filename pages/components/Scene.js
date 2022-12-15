import useSpline from "@splinetool/r3f-spline";
import { PerspectiveCamera, Html } from "@react-three/drei";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/poMFa2A7q5wgmYng/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#ba7753"]} />
      <group {...props} dispose={null}>
        <group name="clock" position={[-616.32, 0, -135.13]}>
          <mesh
            name="Frame"
            geometry={nodes.Frame.geometry}
            material={nodes.Frame.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Bottom"
            geometry={nodes.Bottom.geometry}
            material={nodes.Bottom.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Glass"
            geometry={nodes.Glass.geometry}
            material={nodes.Glass.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Shim_1"
            geometry={nodes.Shim_1.geometry}
            material={nodes.Shim_1.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Arrow_1"
            geometry={nodes.Arrow_1.geometry}
            material={nodes.Arrow_1.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Pimp"
            geometry={nodes.Pimp.geometry}
            material={nodes.Pimp.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Shim_2"
            geometry={nodes.Shim_2.geometry}
            material={nodes.Shim_2.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Arrow_2"
            geometry={nodes.Arrow_2.geometry}
            material={nodes.Arrow_2.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
          <mesh
            name="Arrow_3"
            geometry={nodes.Arrow_3.geometry}
            material={nodes.Arrow_3.material}
            castShadow
            receiveShadow
            position={[-616.32, 0, -135.13]}
          />
        </group>
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          castShadow
          receiveShadow
          position={[10.5, 151.12, 5.5]}
        />
        <mesh
          name="Cube 4"
          geometry={nodes["Cube 4"].geometry}
          material={nodes["Cube 4"].material}
          castShadow
          receiveShadow
          position={[1.35, 1.88, 84.97]}
        />
        <mesh
          name="Cube 3"
          geometry={nodes["Cube 3"].geometry}
          material={nodes["Cube 3"].material}
          castShadow
          receiveShadow
          position={[1.71, 0.06, 7.83]}
        />
        <mesh
          name="Cube 2"
          geometry={nodes["Cube 2"].geometry}
          material={materials["Cube 2 Material"]}
          castShadow
          receiveShadow
          position={[1.35, 1.88, 77.37]}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          castShadow
          receiveShadow
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[200, 300, 300]}
        />
        <PerspectiveCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[-563.67, 421.11, 710.59]}
          rotation={[-0.53, -0.6, -0.32]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  );
}
