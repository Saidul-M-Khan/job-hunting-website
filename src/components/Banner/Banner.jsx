import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";

const Banner = () => {
  return (
    <>
      <header>
        <div className="w-full bg-cover bg-center bg-purple-50">
          <div className="grid lg:grid-cols-2 items-center justify-center h-full w-full bg-purple-50 sm:flex-col dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="text-start p-10">
              <h1 className="text-dark text-5xl font-bold uppercase md:text-3xl dark:text-white">
                One Step Closer To Your <br />
                <span className="text-blue-600 dark:text-blue-200">Dream Job</span>
              </h1>
              <small className="text-gray-500 dark:text-gray-300">
                Explore thousands of job opportunities with all the information
                you need. Its your future. Come find it. Manage all your job
                application from start to finish.
              </small>
              <div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <Link to="/jobs" className="text-white">Get Started</Link>
                </button>
              </div>
            </div>
            <div>
              <img src={user} alt="" className="w-27 " />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
