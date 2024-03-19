import "./Navbar.css";
import Sidepanel from '../Sidepanel/Sidepanel'
const Navbar = () => {
  
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ background: "rgb(210,210,210)" }}
      >
        <img
          src="/images/gramsahay-logo.png"
          alt="Logo"
          className="nav__logo"
          id="logo"
        />

        <ul className="nav__links">
          <li id="li-btn">
            <button
              class="btn"
              id="burger btn-menu hover-eff"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              ☰ Menu
            </button>
          </li>
        </ul>
      </nav>
      <Sidepanel />
    </>
  );
};

export default Navbar;
