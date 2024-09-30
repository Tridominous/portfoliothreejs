import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {

    const [hasCopied, sethasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("jamesmou02@gmail.com");
        sethasCopied(true);

        //Reset to false
        setTimeout(() => {
            sethasCopied(false);
            }, 2000);
    }
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain"/>
                <div>
                    <p className="grid-headtext">Hi I&apos;m James</p>
                    <p className="grid-subtext">Passionate web developer on a journey of growth, learning and applying industry level skills to create great websites and products.</p>
                </div>
            </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/my_tech_stack.png" alt="grid2" className="w-full sm:w-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">My Tech Stack</p>
                        <p className="grid-subtext">I specialise in JavaScript/TypeScript in both frontend and backend domains.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                    <Globe
                        width={326}
                        height={326}
                        backgroundColor="rgba(0, 0, 0, 0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{
                            "lat": 51.3026,
                            "lng": 0.739,
                            "text": "I'm here: London",
                            "color": "#fff",
                            "size": 20
                        }]}
                    />
                </div>
                    <div>
                        <p className="grid-headtext">I work remotely across most timezones</p>
                        <p className="grid-subtext">I&apos;m based in the UK with remote work available.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div> 
                    <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain"/>

                    <div>
                        <p className="grid-headtext">I possess an unbounded passion for coding and solving things!</p>
                        <p className="grid-subtext">I love solving problems, learning all things scientific and implementation to solve real world problems.</p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jamesmou02@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About