import {Clock, Mail, MapPin, Phone} from "lucide-react";

const Contact = () => {
  return (
    <div className={"flex flex-col font-poppins container min-w-full bg-white justify-center pt-28 pb-12"}>
      <h2
        className={"text-primary lg:text-4xl text-2xl font-semibold lg:font-bold pb-1 lg:pb-3 text-center"}>Contact
        Us</h2>
      <div className={"flex flex-col lg:flex-row gap-x-6"}>
        <div className={"flex flex-col lg:w-1/2 pl-6"}>
          <h3 className={"text-xl pl-2 border-l-4 border-primary mt-4 font-bold -ml-6"}>Always Here to Help you</h3>
          <p className={"text-primary font-sans mt-5 leading-6 tracking-normal -ml-6"}>There are many variations of
            passages
            of
            Lorem Ipsum
            available, but the majority have suffered alteration in some form, by injected humor, or randomized words
            which
            don't look even slightly believable.
            .</p>
          <span className={"flex flex-row gap-x-6 items-center mt-5"}>
            <span className={"bg-background p-5 rounded-full"}>
              <MapPin className={"size-9"}/>
            </span>
          <span className={"flex flex-col "}>
            <h6 className={"text-lg font-bold text-primary/80"}>Location</h6>
            <p
              className={"text-inactive"}>Non deserunt ullamco alteration, <br/> ullamco est sit aliqua </p></span>
          </span>
          <span className={"flex flex-row mt-5 gap-x-6 items-center"}>
            <span className={"bg-background p-5 rounded-full"}>
            <Mail className={"size-9"}/>
            </span>
          <span className={"flex flex-col "}>
            <h6 className={"text-lg font-bold text-primary/80"}>Location</h6>
            <p className={"text-inactive"}>support@sister5.com <br/> mail@sister5.com</p>
          </span>
          </span>
          <span className={"flex flex-row mt-5 gap-x-6 items-center"}>
            <span className={"bg-background p-5 rounded-full"}>
            <Phone className={"size-9"}/>
            </span>
          <span className={"flex flex-col "}>
            <h6 className={"text-lg font-bold text-primary/80"}>Location</h6>
          <p className={"text-inactive"}>(+62)823-4567-8901 <br/>(+62)823-2222-3333 </p>
          </span>
          </span>
          <span className={"flex flex-row mt-5 gap-x-6 items-center"}>
            <span className={"bg-background p-5 rounded-full"}>
            <Clock className={"size-9"}/>
            </span>
          <span className={"flex flex-col "}>
            <h6 className={"text-lg font-bold text-primary/80"}>House Of Operation</h6>
          <p className={"text-inactive"}>Monday - Friday: 09.00 - 20.00 <br/>Sunday & Saturday: 10.30 - 22..30</p>
          </span>
          </span>
        </div>
        <div className={"flex flex-col lg:w-1/2 mt-5 lg:mt-3"}>
          <div className="flex justify-center items-center">
            <form className="w-full max-w-xl bg-background rounded-lg p-6">
              <h2 className="text-3xl font-bold text-primary mb-3 text-start">Ready to Get Started ?</h2>
              <p className={"text-primary font-poppins text-sm mb-4"}>
                You email address will not be published. Required fields are marked.
              </p>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact