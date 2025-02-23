import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

// Custom imports
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

// Data import
import { myProjects } from "../constants";
import { Center, OrbitControls } from "@react-three/drei";

const Projects = () => {
  // state for current project index
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  // funciton to handle project navigation
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="projects" className="c-space my-20">
      <p className="head-text">My Recent Projects</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Project Left side container */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/* Project Image */}
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          {/* Project Logo */}
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-20 h-20 shadow-sm"
            />
          </div>

          {/* Project Title & Description*/}
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            {/* Project Technologies Logos */}
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo relative group">
                  <img src={tag.path} alt={tag.name} />
                  <div className="absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {tag.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Live deployment link arrow */}
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check live Site</p>
              <img
                src="/assets/arrow-up.png"
                alt="up arrow"
                className="w-3 h-3"
              />
            </a>
          </div>

          {/* Arrows to navigate projects */}
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Project Right side container - 3D Demo */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <Center>
              <Suspense fallback={CanvasLoader}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>

            {/* Orbit controls */}
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
