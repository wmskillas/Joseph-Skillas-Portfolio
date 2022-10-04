import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-5 navbarSpacing">
      <h1 className="purpleText text-center">Joseph Donato Skillas</h1>
      <div className="flex-direction-row">
        <h4 className="text-start">
          <Link
            to="/Joseph-Skillas-Portfolio/"
            className="text-white headerList text-decoration-none headerMargin d-flex homeIcon headerText"
          >
            :Home:
          </Link>
        </h4>
        <h4 className="text-start">
          <Link
            to="/Joseph-Skillas-Portfolio/music-videos"
            className="text-white headerList text-decoration-none fw-bold headerMargin d-flex headerText"
          >
            :Music Videos:
          </Link>
        </h4>
        <h4 className="text-start">
          <Link
            to="/Joseph-Skillas-Portfolio/stills"
            className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex headerText"
          >
            :Stills:
          </Link>
        </h4>
        <h4 className="text-start">
          <Link
            to="/Joseph-Skillas-Portfolio/credits"
            className="text-white m-2 text-decoration-none fw-bold headerMargin d-flex headerText"
          >
            :Credits:
          </Link>
        </h4>
        <h4 className="about">
          <Link
            to="/Joseph-Skillas-Portfolio/about"
            className="text-white m-2 text-decoration-none contactMargin d-flex headerText"
          >
            :About|Contact:
          </Link>
        </h4>
      </div>
    </header>
  );
};
export default Navbar;
