function UnderNav({ title }) {
  return (
    <>
      <h2 className="mx-auto text-2xl font-semibold text-center ">{title}</h2>

      <div>
        <img
          className="relative top-6 left-0 w-[300px]"
          src="/public/assets/images/bg1.png"
          alt=""
        />

        <img
          className="relative top-[-277px] left-[994px] w-[300px]"
          src="/public/assets/images/bg2.png"
          alt=""
        />
      </div>
    </>
  );
}

export default UnderNav;
