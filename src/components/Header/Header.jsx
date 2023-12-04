import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          aria-label="Jobs"
          title="Jobs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/applied"
          aria-label="Jobs"
          title="Jobs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          aria-label="Statistics"
          title="Statistics"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          aria-label="Blogs"
          title="Blogs"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case lg:text-xl" to="/">Job Hunt BD</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" to="/jobs">Apply Now</Link>
      </div>
    </div>
  );
};

export default Header;
