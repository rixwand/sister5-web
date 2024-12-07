import {CirclePlay} from "lucide-react";
import Wave4 from '../assets/wave4.svg'
import Wave3 from '../assets/wave3.svg'
import Wave2 from '../assets/wave2.svg'
import Wave from '../assets/wave.svg'

const Home = () => {
  return (
    <div className={"container min-w-full lg:pt-20 pt-24 justify-center bg-primary relative"}>
      <h2 className={"flex-wrap text-4xl lg:text-title lg:px-52 font-poppins text-center text-light font-bold"}>Grow
        Your
        Skills
        to Advance
        Your Career Path</h2>
      <p className={"text-light text-xs lg:text-base text-center font-poppins mt-6"}>Lorem ipsum
        dolor sit
        amet,
        consectetur
        adipiscing elit, sed do eiusmod tempor incididunt. </p>
      <div className={"flex-row flex items-center justify-center gap-x-8 py-7"}>
        <button
          className={"bg-accent px-6 py-3 font-poppins lg:text-base text-sm font-semibold rounded-full text-primary"}>Get
          Started
        </button>
        <button className={"flex items-center justify-center gap-x-2"}>
          <CirclePlay className={"text-accent size-8 lg:size-11"}/>
          <span className={"font-poppins text-light lg:text-base text-sm font-medium"}>Watch Video</span>
        </button>
      </div>
      <div className={"h-28"}></div>
      <span
        className={"px-6 absolute -bottom-16 z-20 left-0 right-0 flex flex-row items-center justify-center gap-x-2"}>
        <span className={'w-1/4 h-36 bg-red-300 rounded-full mt-14 justify-center items-end flex overflow-hidden'}>
          <img src="/images/IMG_20241207_124509.png" alt="people1"/>
        </span>
        <span className={'w-1/4 h-36 bg-red-300 rounded-full justify-center items-end flex overflow-hidden'}>
          <img src="/images/IMG_20241207_124509.png" alt="people1"/>
        </span>
        <span className={'w-1/4 h-36 bg-red-300 rounded-full mt-14 justify-center items-end flex overflow-hidden'}>
          <img src="/images/IMG_20241207_124509.png" alt="people1"/>
        </span>
        <span className={'w-1/4 h-36 bg-red-300 rounded-full justify-center items-end flex overflow-hidden'}>
          <img src="/images/IMG_20241207_124509.png" alt="people1"/>
        </span>
      </span>
      <span
        className={"flex-row flex align-bottom absolute left-0 right-0 bottom-0 bg-white"}>
        <img src={Wave} alt={"wave1"} className={"w-1/4"}/>
        <img src={Wave2} alt={"wave2"} className={"w-1/4"}/>
        <img src={Wave3} alt={"wave3"} className={"w-1/4"}/>
        <img src={Wave4} alt={"wave4"} className={"w-1/4"}/>
      </span>
    </div>
  )
}

export default Home;