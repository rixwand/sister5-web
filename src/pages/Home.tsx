import {CirclePlay} from "lucide-react";

const Home = () => {
  return (
    <div className={"container pt-20 justify-center bg-primary"}>
      <h2 className={"flex-wrap text-title font-poppins text-center text-light font-bold"}>Grow Your Skills to Advance
        <br/>
        Your Career Path</h2>
      <p className={"text-light text-center font-poppins font-medium mt-4"}>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt. </p>
      <div className={"flex-row flex items-center justify-center gap-x-8 py-5"}>
        <button className={"bg-accent px-6 py-3 font-poppins font-semibold rounded-full text-primary"}>Get Started
        </button>
        <button className={"flex items-center justify-center gap-x-2"}>
          <CirclePlay className={"text-accent"} size={42}/>
          <span className={"font-poppins text-light font-medium"}>Watch Video</span>
        </button>
      </div>
    </div>
  )
}

export default Home;