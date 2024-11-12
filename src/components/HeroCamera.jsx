import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children , isMobile }) => {

    const groupRef = useRef();
    useFrame((state, delta) => {
        // For mobile devices cause they cannot handle animations for this big model
        if (isMobile){
            easing.damp3(state.camera.position, [0,0,20], 0.25, delta);
        }
        // for desktop devices
        else {
            easing.dampE(groupRef.current.rotation,[-state.pointer.y / 5, state.pointer.x / 3, 0], 0.25, delta);
        }
    });

  return (
    <group ref={ groupRef } scale={isMobile ? 1 : 1.2}>
        { children }
    </group>
  )
}

export default HeroCamera