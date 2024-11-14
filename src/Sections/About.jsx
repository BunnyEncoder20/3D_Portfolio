import { useState } from "react";
import Globe from "react-globe.gl";

// Component Imports
import Button from "../components/Button";

const About = () => {
  // State to track if email was copied
  const [hasCopied, setHasCopied] = useState(false);

  // Function to handle copying of Email
  const handleCopy = () => {
    navigator.clipboard.writeText("varun.verma2024@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Grid 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi I am Varun Verma</p>
              <p className="grid-subtext">
                With a passiong for coding I honed my skills in Full Stack with
                a focus on backend technologies
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I spealize in Javascript and Python with a focus on MERN
                technologies
              </p>
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{
                  lat: 19.0760,
                  lng: 72.8777,
                  text: "I'm here!",
                  color: "white",
                  size: 20,
                }]}
                labelSize={3}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I’m very flexible with almost all time zone communications &
                locations
              </p>
              <p className="grid-subtext">
                I'm based in Mumbai India, open to remote work worldwide.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for CODING</p>
              <p className="grid-subtext">
                I love solving problems abd building things through code. Coding
                isn't just my profession, it is my Passion.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h=[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">
                Get my Email
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                  className="w-6 h-6"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  varun.verma2024@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
