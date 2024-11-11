import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';


// Component imports 
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'

function Hero() {

    const isMobile = useMediaQuery({ maxWidth:768});
    const controls = useControls('HackerRoom', {
        scale: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
    })

    return (
        <section className="min-h-screen w-full flex-col relative">
            <div className="w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Varun <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building Web Applications 
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/* Lets you control the properties of 3D models directly from the browser */}
                <Leva />

                <Canvas className="w-full h-full">
                    <Suspense fallback={ <CanvasLoader /> }>
                        <PerspectiveCamera makeDefault position={[0,0,30]} />

                        {/* Hacker Room component here */}  
                        <HackerRoom 
                            scale={ isMobile ? 0.07 : 0.125} 
                            position={[0.9,isMobile ? 1 : -8.0,1.3]} 
                            // rotation={[-2.8, -6.3, -3.15]}
                            rotation={[0.4, -Math.PI, 0]}
                            // scale = {[controls.scale, controls.scale, controls.scale,]}
                            // position = {[controls.positionX, controls.positionY, controls.positionZ]}
                            // rotation = {[controls.rotationX, controls.rotationY, controls.rotationZ]}
                        />

                        {/* Lighting for the scene */}
                        <ambientLight intensity={1} />
                        <directionalLight intensity={0.5} position={[10,10,10]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero