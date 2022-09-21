const Navbar = () => {
  return (
    <header className="py-5">
      <h1 className="purpleText text-end">Joseph Donato Skillas</h1>
      <div className="flex-direction-row">
        <h4 className="text-start">
          <a
            href="/"
            className="text-white headerList text-decoration-none headerMargin d-flex homeIcon"
          >
            :Home:
          </a>
        </h4>
        <h4 className="text-start">
          <a
            href="/music-videos"
            className="text-white headerList text-decoration-none fw-bold headerMargin d-flex"
          >
            :Music Videos:
          </a>
        </h4>
        <h4 className="text-start">
          <a
            href="/stills"
            className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex"
          >
            :Stills:
          </a>
        </h4>
        <h4 className="text-start">
          <a
            href="/credits"
            className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex"
          >
            :Credits:
          </a>
        </h4>
        <h4 className="about">
          <a
            href="/about"
            className="text-white m-2 text-decoration-none contactMargin d-flex"
          >
            :About|Contact:
          </a>
        </h4>
      </div>
    </header>
  );
};
export default Navbar;
