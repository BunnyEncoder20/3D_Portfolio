import React from 'react'

const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/* Grid 1 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext" >Hi I am Varun Verma</p>
                            <p className="grid-subtext">With a passiong for coding I honed my skills in Full Stack with a focus on backend technologies</p>
                        </div>
                    </div>
                </div>

                {/* Grid 2 */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I spealize in Javascript and Python with a focus on MERN technologies</p>
                        </div>
                    </div>
                </div>

                {/* Grid 3 */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About