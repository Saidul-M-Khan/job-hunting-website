import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      question: "How do I create an account on the job hunting website?",
      answer: "Creating an account is simple. Click on the 'Sign Up' button on the homepage, fill in the required information such as your name, email address, and password. Once registered, you can start building your profile and exploring job opportunities.",
    },
    {
      id: 2,
      question: "Can I upload multiple versions of my resume?",
      answer: "Absolutely! We encourage you to tailor your resume for different job applications. Simply go to your profile settings, and you'll find an option to upload and manage multiple versions of your resume. This allows you to highlight specific skills and experiences relevant to different job opportunities.",
    },
    {
      id: 3,
      question: "How can I set up job alerts to receive notifications about new opportunities?",
      answer: "To set up job alerts, log in to your account and navigate to the 'Job Alerts' section. Specify your preferred job criteria such as location, industry, and job type. Once saved, you'll receive email notifications whenever new job listings matching your preferences are posted on the website.",
    },
    {
      id: 4,
      question: "Is my personal information secure on this job hunting website?",
      answer: "Yes, protecting your privacy is our priority. We employ industry-standard security measures to safeguard your personal information. Your data is encrypted, and we adhere to strict privacy policies. Additionally, you have control over the visibility of your profile, and your contact information is only shared with employers when you apply for a specific job.",
    },
  ];

  console.log(blogs.map((blog) => blog.question));
  return (
    <>
      <div className="w-full bg-cover bg-center bg-purple-50">
        <div className="flex h-full w-full bg-purple-50 sm:flex-col">
          <div>
            <img src={bg2} alt="" className="w-48 ms-4 float-right" />
          </div>

          <div className="text-center flex justify-center items-center lg:p-10">
            <h1 className="text-dark lg:text-3xl sm:text-lg font-bold md:text-2xl dark:text-black">
            Blogs
            </h1>
          </div>

          <div>
            <img src={bg1} alt="" className="w-48 me-4 overflow-hidden" />
          </div>
        </div>
      </div>

      <div className="my-10 grid lg:grid-cols-3 sm:grid-cols-1 justify-between items-center gap-5 mx-5">
        {blogs.map((blog) => {
          return (
            <>
              <div key={blog.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {blog.question}
                  </h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  <strong className="me-1 text-gray-900 dark:text-white">Answer:</strong>{blog.answer}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
