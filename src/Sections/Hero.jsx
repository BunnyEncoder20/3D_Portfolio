import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';


// Component imports 
import HackerRoom from '../components/HackerRoom'
import HeroCamera from '../components/HeroCamera';
import CanvasLoader from '../components/CanvasLoader'
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import Button from '../components/Button';

// Custom Functions
import { calculateSizes } from '../utils/CalculateSizes';

const Hero = () => {

    const isMini = useMediaQuery({ maxWidth: 440});
    const isMobile = useMediaQuery({ maxWidth:768});
    const isTablet = useMediaQuery({ minWidth: 768,maxWidth:1024});

    const responsive3D = calculateSizes(isMini, isMobile, isTablet)

    // Uncomment to get Leve controls 
    // const controls = useControls('HackerRoom', {
    //     scale: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    // })

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            {/* Hello text */}
            <div className="w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Varun <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Software Developer 
                </p>
            </div>


            <div className="w-full h-full absolute inset-0">
                {/* Lets you control the properties of 3D models directly from the browser */}
                <Leva />

                <Canvas className="w-full h-full">
                    <Suspense fallback={ <CanvasLoader /> }>
                        <PerspectiveCamera makeDefault position={[0,0,20]} />

                        {/* Camera for the main 3D model */}
                        <HeroCamera isMobile={ isMobile }>
                        {/* Hacker Room component here */}  
                            <HackerRoom 
                                scale={ responsive3D.deskScale } 
                                position={ responsive3D.deskPosition } 
                                rotation={[0.4, -Math.PI, 0]}

                                // For leva controls
                                // scale = {[controls.scale, controls.scale, controls.scale,]}
                                // position = {[controls.positionX, controls.positionY, controls.positionZ]}
                                // rotation = {[controls.rotationX, controls.rotationY, controls.rotationZ]}
                            />
                        </HeroCamera>

                        <group>
                            {/* Floating Icons */}
                            <Target position={ responsive3D.targetPosition } />
                            <ReactLogo position={ responsive3D.reactLogoPosition } />
                            <Cube position={ responsive3D.cubePosition } />
                            <Rings position={ responsive3D.ringPosition } />
                        </group>

                        {/* Lighting for the scene */}
                        <ambientLight intensity={1} />
                        <directionalLight intensity={2.5} position={[10,10,10]}/>
                    </Suspense>
                </Canvas>
            </div>

            {/* Button to take to next section */}
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Get to know me" isBeam containerClass="sw:w-fit w-fit sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero