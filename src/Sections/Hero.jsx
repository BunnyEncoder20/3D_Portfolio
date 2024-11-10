import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'


// Component imports 
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'

function Hero() {
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
                <Canvas className="w-full h-full">
                    <Suspense fallback={ CanvasLoader }>
                        <PerspectiveCamera makeDefault position={[0,0,30]} />

                        {/* Hacker Room component here */}  
                        <HackerRoom scale={0.08} position={[0,0,0]} rotation={[0, 280, 0]}/>

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