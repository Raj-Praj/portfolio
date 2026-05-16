import "../styles/navbar.css";

function Navbar({ setActivePage, activePage }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">

        <li
          className={activePage === "home" ? "active" : ""}
          onClick={() => setActivePage("home")}
        >
          Home
        </li>

        <li
          className={activePage === "about" ? "active" : ""}
          onClick={() => setActivePage("about")}
        >
          About
        </li>

        <li
          className={activePage === "projects" ? "active" : ""}
          onClick={() => setActivePage("projects")}
        >
          Projects
        </li>

        <li
          className={activePage === "contact" ? "active" : ""}
          onClick={() => setActivePage("contact")}
        >
          Contact
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;