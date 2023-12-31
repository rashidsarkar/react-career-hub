import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              <li>
                <Link>Statistics</Link>
              </li>
              <li>
                <Link to="/applyedJob">Applied Jobs</Link>
              </li>
              <li>
                <Link to="/BlogPage">Blog</Link>
              </li>
            </ul>
          </div>
          <Link className="text-xl normal-case btn btn-ghost">CareerHub</Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <Link>Statistics</Link>
            </li>
            <li>
              <Link to="/applyedJob">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/BlogPage">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="font-semibold text-white btn bg-gradient-to-r from-blue-500 to-purple-700">
            Star Applying
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
