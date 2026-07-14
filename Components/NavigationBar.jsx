import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Hackathon
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/AddTeam">
            Add Team
          </Link>

          <Link className="nav-link" to="/ViewTeam">
            View Team
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default NavigationBar;