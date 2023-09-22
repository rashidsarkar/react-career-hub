function Baner() {
  return (
    <div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src="../../../public/assets/images/user.png"
            className="max-w-md rounded-lg "
          />
          <div className=" lg:w-[570px]">
            <h1 className="text-5xl font-bold">
              One Step <br /> Closer To Your <br />
              <span>
                <span className="text-5xl font-extrabold text-blue-500 font-manrope leading-100">
                  Dream Job
                </span>
              </span>
            </h1>

            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="font-semibold text-white btn bg-gradient-to-r from-blue-500 to-purple-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baner;
