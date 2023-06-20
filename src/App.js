import './App.css';
import Nav from './Components/NavBar';
import Main from './Components/Main';
import About from './Components/About';


import { useRef, useState } from 'react'
import { Mesh } from "three";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera} from "@react-three/drei";

function Coin2(props){
  // const meshRef = useRef<Mesh>(null);
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.1;
    meshRef.current.rotation.z += 0.1;
   
  });
  
  return(
    <mesh {...props} ref={meshRef} >
      

      <cylinderGeometry args={[0.5, 0.5, 0.1]} />
      <meshStandardMaterial color={"red"}/>

    </mesh>
  )
}
function Coin(props) {
  // // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX

  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      >
      <cylinderGeometry args={[0.5, 0.5, 0.1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'gold'} />

    </mesh>
  )
}

function App() {

  return (
    <div className="App">
      <Nav /> 
      <Main />
      <About />
      
      <Canvas className="canvas" style={{ width: '80vw', height: '80vh', border: "white solid 0.5rem", margin: "auto" }}>
      
      <ambientLight />
      <pointLight position={[10, 0, 10]} />
      <Coin position={[-5, 0, 0]} />
      <Coin position={[-2, -2, 0]} />
      <Coin position={[-2, 0, 0]} />
      <Coin position={[-2, 2, 0]} />
      <Coin position={[0, -2, 0]} />
      <Coin position={[0, 0, 0]} />
      <Coin position={[0, 2, 0]} />
      <Coin position={[2, -2, 0]} />
      <Coin position={[2, 0, 0]} />
      <Coin position={[2, 2, 0]} />
      <Coin position={[5, 0, 0]} />

      {/* <Coin2 position={[5, 0, 5]} /> */}
      <OrbitControls />
      <Stars />
      <PerspectiveCamera
          makeDefault
          position={[15, 5, 20]} // Adjust the z-coordinate to move the camera further away
        />
        
      </Canvas>

      {/* <Grid rows={5} columns={30}/>
      <div>line breakline breakline breakline breakline breakline breakline breakline break</div> */}
    </div>
  );
}

export default App;
