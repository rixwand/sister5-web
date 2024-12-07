const About = () => {
  return (
    <div
      className={"flex flex-col font-poppins container min-w-full bg-white justify-center pt-28 pb-12"}>
      <h2
        className={"text-primary lg:text-4xl text-2xl font-semibold lg:font-bold pb-1 lg:pb-3 text-center"}>About
        Us</h2>
      <div className={"flex flex-col lg:flex-row"}>
        <div className={"flex flex-col lg:w-2/3 pr-16"}>
          <h3 className={"text-lg border-l-2 my-4 border-primary font-semibold pl-3"}>WHO WE ARE</h3>
          <h2 className={"text-primary text-3xl lg:text-5xl font-bold pb-1 lg:pr-8 "}>We are providing
            the
            best quality
            online
            courses. Our
            all instructors are high expert</h2>
          <p className={"text-primary mt-5 leading-6 tracking-wide"}>There are many variations of passages of Lorem
            Ipsum
            available, but
            the
            majority
            have suffered alteration in
            some form, by injected humor, or randomized words which don't look even slightly believable. If you are
            going to
            use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
            text.</p>
          <div className={"flex flex-row flex-wrap lg:gap-x-16 gap-x-12 gap-y-5 mt-7"}>
        <span>
          <h5 className={"text-3xl font-bold text-primary"}>256+</h5>
          <p className={"text-primary/80 text-sm lg:text-base leading-6 tracking-wide"}>Enrolled learner</p>
        </span>
            <span>
          <h5 className={"text-3xl font-bold text-primary"}>89</h5>
          <p className={"text-primary/80 text-sm lg:text-base leading-6 tracking-wide"}>Finished Session</p>
        </span>
            <span>
          <h5 className={"text-3xl font-bold text-primary"}>99+</h5>
          <p className={"text-primary/80 text-sm lg:text-base leading-6 tracking-wide"}>Satisfaction Rate</p>
        </span>
            <span>
          <h5 className={"text-3xl font-bold text-primary"}>80+</h5>
          <p className={"text-primary/80 text-sm lg:text-base leading-6 tracking-wide"}>Awards Winning</p>
        </span>
          </div>
        </div>
        <div
          className={"lg:w-1/3 lg:-mt-16 mt-10 w-full h-[34rem] bg-red-200 flex items-end overflow-clip rounded-t-full"}>
          <img src="/images/IMG_20241207_124509.png" alt="people say good" className={"w-full translate-y-8"}/>
        </div>
      </div>
    </div>
  )
}

export default About