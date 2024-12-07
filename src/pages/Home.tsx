import {
  BookOpenText,
  BookText,
  Boxes,
  ChartCandlestick,
  CirclePlay,
  CodeXml,
  Command,
  PaintbrushVertical,
  Wallet
} from "lucide-react";
import Wave4 from '../assets/wave4.svg'
import Wave3 from '../assets/wave3.svg'
import Wave2 from '../assets/wave2.svg'
import Wave from '../assets/wave.svg'

const Home = () => {
  return (
    <>
      <div className={"container min-w-full lg:pt-32 pt-24 justify-center bg-primary relative"}>
        <h2 className={"flex-wrap text-4xl lg:text-title lg:px-28 font-poppins text-center text-light font-bold"}>Grow
          Your
          Skills
          to Advance
          Your Career Path</h2>
        <p className={"text-light text-xs lg:text-base text-center font-poppins mt-6 lg:mt-10"}>Lorem ipsum
          dolor sit
          amet,
          consectetur
          adipiscing elit, sed do eiusmod tempor incididunt. </p>
        <div className={"flex-row flex items-center justify-center gap-x-8 py-7 lg:py-10"}>
          <button
            className={"bg-accent px-6 py-3 lg:py-4 lg:px-8 font-poppins lg:text-xl text-sm font-semibold rounded-full text-primary"}>Get
            Started
          </button>
          <button className={"flex items-center justify-center lg:gap-x-3 gap-x-2"}>
            <CirclePlay className={"text-accent size-8 lg:size-14"}/>
            <span className={"font-poppins text-light lg:text-xl text-sm font-medium"}>Watch Video</span>
          </button>
        </div>
        <div className={"h-24 lg:h-72"}></div>
        <div
          className={"px-7 lg:px-0 lg:container absolute -bottom-16 lg:-bottom-56 z-20 left-0 right-0 flex flex-row items-center justify-center lg:gap-x-2 gap-x-1"}>
          <span
            className={'image-container lg:mt-24 mt-14 border-offset-tl'}>
          <span className={'image-wrapper'}>
            <img src="/images/IMG_20241207_124509.png" alt="people1"/>
          </span>
        </span>
          <span
            className={'image-container border-offset-t'}>
          <span className={'image-wrapper'}>
            <img src="/images/IMG_20241207_124450.png" alt="people2"/>
          </span>
        </span>
          <span
            className={'image-container mt-14 lg:mt-24 border-offset-t'}>
          <span className={'image-wrapper'}>
            <img src="/images/IMG_20241207_124430.png" alt="people3"/>
          </span>
        </span>
          <span
            className={'image-container border-offset-tr'}>
          <span className={'image-wrapper'}>
            <img src="/images/IMG_20241207_124521.png" alt="people4"/>
          </span>
        </span>
        </div>
        <span
          className={"flex-row flex align-bottom absolute left-0 right-0 bottom-0 bg-white"}>
        <img src={Wave} alt={"wave1"} className={"w-1/4"}/>
        <img src={Wave2} alt={"wave2"} className={"w-1/4"}/>
        <img src={Wave3} alt={"wave3"} className={"w-1/4"}/>
        <img src={Wave4} alt={"wave4"} className={"w-1/4"}/>
      </span>
      </div>
      <div
        className={"container flex lg:flex-row flex-col -mt-2 pt-24 lg:pt-80 min-w-full bg-background lg:justify-between justify-center pb-16 lg:pb-20"}>
        <div className={"items-center lg:items-start lg:w-1/3 flex flex-col px-7"}>
          <h3
            className={"lg:text-4xl text-2xl text-primary lg:text-start text-center font-bold font-poppins"}>Explore <br/> Our
            Categories</h3>
          <p className={"font-medium text-center lg:text-start lg:text-lg mt-3 lg:break-all text-primary"}>Lorem ipsum
            dolor sit amet,
            consectetur
            adipiscing
            elit.
            Sed do
            eiusmod
            tempor incididunt ut labore et
            dolore magna.
          </p>
          <button
            className={"mt-5 lg:mt-10 py-4 font-semibold px-6 bg-primary text-light rounded-full font-poppins"}>Explore
            Categories
          </button>
        </div>
        <div className={"flex flex-col gap-y-5 mt-10 lg:mt-0 lg:w-2/3 lg:pr-8"}>
          <div className={"flex flex-row justify-between lg:justify-end lg:gap-x-24"}>
            <button className={"flex items-center flex-col"}>
              <span className={"icon bg-lightpurple "}><Command
                className={"size-14 stroke-1 text-primary"}/></span>
              <p className={"icon-text"}>Data Science</p>
            </button>
            <button className={"flex items-center flex-col"}>
              <span className={"icon bg-lightgreen "}>
                <BookOpenText className={"size-14 stroke-1 text-primary"}/>
              </span>
              <p className={"font-poppins text-primary text-sm mt-3"}>English</p>
            </button>
            <button className={"flex items-center flex-col"}>
              <span className={"icon bg-lightpink "}><Wallet
                className={"size-14 stroke-1 text-primary"}/></span>
              <p className={"icon-text"}>Finance</p>
            </button>
            <button className={"flex items-center flex-col"}>
              <span className={"icon bg-lightpurple "}><BookText
                className={"size-14 stroke-1 text-primary"}/></span>
              <p className={"icon-text text-wrap"}>Writing</p>
            </button>
          </div>
          <div className={"flex flex-row justify-between lg:justify-end lg:gap-x-24"}>
            <button className={"flex items-center flex-col"}>
              <span className={"icon bg-lightgreen "}><CodeXml
                className={"size-14 stroke-1 text-primary"}/></span>
              <p className={"icon-text"}>Development</p>
            </button>
            <button className={"flex items-center flex-col"}>
              <span className={"icon bg-lightpink "}>
                <PaintbrushVertical className={"size-14 stroke-1 text-primary"}/>
              </span>
              <p className={"icon-text"}>Art & Design</p>
            </button>
            <button className={"flex items-center flex-col"}>
              <span className={"icon bg-lightpurple "}><Boxes
                className={"size-14 stroke-1 text-primary"}/></span>
              <p className={"icon-text"}>Management</p>
            </button>
            <button className={"flex items-center flex-col"}>
              <span className={"lg:p-6 p-3 rounded-lg lg:rounded-2xl bg-lightgreen "}><ChartCandlestick
                className={"size-14 stroke-1 text-primary"}/></span>
              <p className={"font-poppins text-primary text-sm mt-3"}>Business</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;