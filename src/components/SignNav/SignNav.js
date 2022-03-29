import "../SignNav/SignNav.scss";
import { Link } from "react-router-dom";

function SignNav() {
  return (
    <nav className="logobox">
      <Link to="/" className="logo">
        ALABOOKS
      </Link>
    </nav>
  );
}

export default SignNav;
