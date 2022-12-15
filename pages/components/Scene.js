import useSpline from "@splinetool/r3f-spline";
import { PerspectiveCamera } from "@react-three/drei";
import Agenda from "./Agenda";

import { Html, Mask } from "@react-three/drei";

export default function Scene({ date, ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/poMFa2A7q5wgmYng/scene.splinecode"
  );

  const seconds = -date.getSeconds() * (60 / 360);
  const minutes = -(date.getMinutes() / 60) * 360;
  const hours = -date.getHours() * (12 / 360);

  return (
    <>
      <group {...props} dispose={null}>
        <group name="Klok rond" position={[192, 0, -300.99]}>
          <mesh
            name="Glass"
            geometry={nodes.Glass.geometry}
            material={nodes.Glass.material}
            castShadow
            receiveShadow
            position={[0, 0, 273.08]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1}
          />
          <group name="Wijzers dekplaat" position={[1, 1, 123]}>
            <mesh
              name="Ellipse 2"
              geometry={nodes["Ellipse 2"].geometry}
              material={materials["Ellipse 2 Material"]}
              castShadow
              receiveShadow
              position={[1, 1, 283.29]}
            />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials["Wijzer zwart"]}
              castShadow
              receiveShadow
              position={[1, 1, 283.02]}
            />
          </group>
          <group
            name="Secondewijzer"
            position={[1, 1, 120]}
            rotation={[0, 0, seconds]}
            scale={1}
          >
            <mesh
              name="Ellipse1"
              geometry={nodes.Ellipse1.geometry}
              material={materials["Ellipse1 Material"]}
              castShadow
              receiveShadow
              position={[0.86, 0.96, 273.33]}
              rotation={[0, 0, -2.89]}
              scale={1}
            />
            <mesh
              name="Rectangle"
              geometry={nodes.Rectangle.geometry}
              material={materials["Rectangle Material"]}
              castShadow
              receiveShadow
              position={[-47.88, -11.81, 273.26]}
              rotation={[0, 0, -2.89]}
              scale={[1, 1, 11.55]}
            />
          </group>
          <group
            name="Wijzer -klein"
            position={[1, 1, 122]}
            rotation={[0, 0, hours]}
          >
            <mesh
              name="Wijzer wit"
              geometry={nodes["Wijzer wit"].geometry}
              material={materials["Wijzer wit Material"]}
              castShadow
              receiveShadow
              position={[48.07, 47.15, 279.03]}
              rotation={[0, 0, 0.78]}
            />
            <mesh
              name="Wijzer zwart"
              geometry={nodes["Wijzer zwart"].geometry}
              material={materials["Wijzer zwart"]}
              castShadow
              receiveShadow
              position={[31.87, 31.27, 278]}
              rotation={[0, 0, 0.78]}
            />
          </group>
          <group
            name="Wijzer - groot"
            position={[1, 1, 120]}
            rotation={[0, 0, minutes]}
            scale={1}
          >
            <mesh
              name="Wijzer wit1"
              geometry={nodes["Wijzer wit1"].geometry}
              material={materials["Wijzer wit1 Material"]}
              castShadow
              receiveShadow
              position={[72.51, -66.31, 279.03]}
              rotation={[0, 0, -0.76]}
              scale={1}
            />
            <mesh
              name="Wijzer zwart1"
              geometry={nodes["Wijzer zwart1"].geometry}
              material={materials["Wijzer zwart"]}
              castShadow
              receiveShadow
              position={[49.67, -44.81, 278]}
              rotation={[0, 0, -0.76]}
              scale={1}
            />
          </group>
          <group name="Klok rond1" position={[2, 1, 123.83]}>
            <mesh
              name="Knop"
              geometry={nodes.Knop.geometry}
              material={nodes.Knop.material}
              castShadow
              receiveShadow
              position={[2, 231.61, 193.95]}
            />
            <mesh
              name="Ellipse2"
              geometry={nodes.Ellipse2.geometry}
              material={materials["Ellipse2 Material"]}
              castShadow
              receiveShadow
              position={[2, 1, 266.92]}
            />
            <mesh
              name="Case white"
              geometry={nodes["Case white"].geometry}
              material={nodes["Case white"].material}
              castShadow
              receiveShadow
              position={[2, 1, 118.91]}
            />
            <mesh
              name="Case orange"
              geometry={nodes["Case orange"].geometry}
              material={nodes["Case orange"].material}
              castShadow
              receiveShadow
              position={[2, 1, 113.02]}
            />
            <mesh
              name="Vloersteun"
              geometry={nodes.Vloersteun.geometry}
              material={materials["Orange case"]}
              castShadow
              receiveShadow
              position={[1, -195.45, 129.29]}
            />
          </group>
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={1.04}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-807.0085}
          shadow-camera-right={807.0085}
          shadow-camera-top={807.0085}
          shadow-camera-bottom={-807.0085}
          position={[200, 300, 300]}
        />
        <PerspectiveCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[-662.17, 65.14, 1352.54]}
          rotation={[-0.05, -0.45, -0.02]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={1.32}
          color="#b49e85"
        />
      </group>
      <Mask
        id={1}
        colorWrite={false}
        depthWrite={false}
        castShadow
        receiveShadow
        position={[0, 0, 120]}
      >
        {/* We can drop the HTML inside, make it a 3d-transform and portal it to the dom container above */}
        <Html className="content-embed" scale={40} transform>
          <div className="w-full max-w-md p-5 bg-white">
            <h1 className="pb-4 font-montserrat text-[15px] text-brown-200">
              {" "}
              <span className="font-extrabold">Januari</span> 2022{" "}
            </h1>

            <article>
              <h2 className="p-1 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
                {" "}
                Ochtend{" "}
              </h2>

              <div className="flex flex-row items-start justify-between py-5">
                <div className="flex items-center p-3 border rounded-sm border-brown-200"></div>

                <div className="w-64">
                  <h2 className="text-xs text-left text-orange-400"> 08:30 </h2>
                  <p className="text-4xl font-bold text-left">
                    Gertjan komt op bezoek
                  </p>
                </div>

                <div className="w-5 h-5 bg-slate-900"></div>
              </div>
            </article>

            <article>
              <h2 className="p-1 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
                {" "}
                Middag{" "}
              </h2>

              <div className="flex flex-row items-start justify-between py-4">
                <div className="w-10 h-10 bg-slate-900"></div>

                <div className="flex-col">
                  <div className="flex items-center justify-between border-b border-solid">
                    <div className="flex flex-col py-1">
                      <h2 className="text-xs text-left text-orange-400 ">
                        {" "}
                        10 over 4{" "}
                      </h2>
                      <p className="text-left text-md">Logopedie met Anna</p>
                    </div>

                    <div className="w-5 h-5 bg-slate-900"></div>
                  </div>

                  <div className="flex items-center justify-between border-b border-solid">
                    <div className="flex flex-col py-1">
                      <h2 className="text-xs text-left text-orange-400">
                        {" "}
                        Half 5{" "}
                      </h2>
                      <p className="text-left text-md">Fysiotherapie met Jan</p>
                    </div>

                    <div className="w-5 h-5 bg-slate-900"></div>
                  </div>

                  <div className="flex items-center justify-between border-b border-solid w-80">
                    <div className="flex flex-col py-1">
                      <h2 className="text-xs text-left text-orange-400">
                        {" "}
                        2 uur{" "}
                      </h2>
                      <p className="text-left text-md">Kerstborrel</p>
                    </div>

                    <div className="w-5 h-5 bg-slate-900"></div>
                  </div>

                  <div className="flex items-center justify-between border-b border-solid w-80">
                    <div className="flex flex-col py-1">
                      <h2 className="text-xs text-left text-orange-400">
                        {" "}
                        8 uur{" "}
                      </h2>
                      <p className="text-left text-md">Karaoke met Rick</p>
                    </div>

                    <div className="w-5 h-5 bg-slate-900"></div>
                  </div>
                </div>
              </div>
            </article>

            <article>
              <h2 className="p-1 text-sm uppercase rounded-sm bg-brown-100 font-montserrat text-brown-200">
                {" "}
                Avond{" "}
              </h2>

              <div className="flex flex-row items-start justify-between py-4">
                <div className="w-10 h-10 bg-slate-900"></div>

                <div className="flex-col">
                  <div className="flex items-center justify-between w-80">
                    <div className="flex flex-col py-1">
                      <h2 className="text-xs text-left text-orange-400 ">
                        {" "}
                        Half 5{" "}
                      </h2>
                      <p className="text-left text-md">Fysiotherapie met Jan</p>
                    </div>

                    <div className="w-5 h-5 bg-slate-900"></div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Html>
      </Mask>
    </>
  );
}
