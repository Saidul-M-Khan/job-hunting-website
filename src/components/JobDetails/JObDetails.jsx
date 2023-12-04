import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";

const JObDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };

  return (
    <div>
      <div className="w-full bg-cover bg-center bg-purple-50">
        <div className="flex h-full w-full bg-purple-50 sm:flex-col">
          <div>
            <img src={bg2} alt="" className="w-48 ms-4 float-right" />
          </div>

          <div className="text-center flex justify-center items-center lg:p-10">
            <h1 className="text-dark lg:text-3xl sm:text-lg font-bold md:text-2xl dark:text-black">
              Job Details
            </h1>
          </div>

          <div>
            <img src={bg1} alt="" className="w-48 me-4 overflow-hidden" />
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4 my-10">
        <div className="md:col-span-3 my-10 mx-5">
          <p className="text-gray-500 dark:text-cyan-200 my-5 text-2xl">
            <span className="text-gray-900 dark:text-white font-bold me-2">
              🏢 Company Name:
            </span>
            {job.company_name}
          </p>
          <p className="text-gray-500 dark:text-gray-300 my-5">
            <span className="text-gray-900 dark:text-white font-bold me-2">
              🖋️ Job Description:
            </span>
            {job.job_description}
          </p>
          <p className="text-gray-500 dark:text-gray-300 my-5">
            <span className="text-gray-900 dark:text-white font-bold me-2">
              👨‍🏫 Job Responsibility:
            </span>
            {job.job_responsibility}
          </p>
          <p className="text-gray-500 dark:text-gray-300 my-5">
            <span className="text-gray-900 dark:text-white font-bold me-2">
              👨‍🎓 Educational Requirements:
            </span>
            {job.educational_requirements}
          </p>
          <p className="text-gray-500 dark:text-gray-300 my-5">
            <span className="text-gray-900 dark:text-white font-bold me-2">
              ✔️ Experiences:
            </span>
            {job.experiences}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="border border-purple-600 bg-purple-100 dark:bg-gray-800 p-5 mx-2">
            <h2 className="text-lg font-bold dark:text-white">Job Details</h2>
            <hr className="h-px my-5 bg-purple-600 border-1 dark:bg-gray-700" />
            <p className="text-gray-500 dark:text-gray-300 my-2">
              <span className="text-gray-900 dark:text-white text-sm font-bold me-2">
                💰 Salary:
              </span>
              {job.salary}
            </p>
            <p className="text-gray-500 dark:text-gray-300 my-2">
              <span className="text-gray-900 dark:text-white text-sm font-bold me-2">
                👨‍💼 Job Title:
              </span>
              {job.job_title}
            </p>
            <h2 className="text-lg dark:text-white font-bold">
              Contact Information
            </h2>
            <hr className="h-px my-5 bg-purple-600 border-1 dark:bg-gray-700" />
            <p className="text-gray-500 dark:text-gray-300 my-2">
              <span className="text-gray-900 dark:text-white text-sm font-bold me-2">
                ☎️ Phone:
              </span>
              {job.contact_information.phone}
            </p>
            <p className="text-gray-500 dark:text-gray-300 my-2">
              <span className="text-gray-900 dark:text-white text-sm font-bold me-2">
                📧 Email:
              </span>
              {job.contact_information.email}
            </p>
            <p className="text-gray-500 dark:text-gray-300 my-2">
              <span className="text-gray-900 dark:text-white text-sm font-bold me-2">
                🏠 Address:
              </span>
              {job.contact_information.address}
            </p>
          </div>

          <div className="mx-2">
            <button onClick={handleApplyJob} className="btn btn-primary w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JObDetails;
