import "./Header.css";
import logo from "../../assets/logogdsc.png";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <>
      <header class="header">
        <nav>
          <div class="logo">
            <a href="/">
              <img src={logo} className="logogdsc"></img>
            </a>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="menu-icon">
            &#9776;
          </label>
          <ul class="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            {/* </li>
            <li>
              <a href="/">How to Contribute</a>
            </li>
            <Link to="timeline" smooth={true} duration={500}>
              Scroll to Component
            </Link>
            <li>
              <a href="/">Timeline</a>
            </li> */}
            <li>
              <a href="/prizes">Prizes</a>
            </li>
            <li>
              <a
                href="https://forms.gle/7GCJFgDamBqM5hxFA"
                className="buttonheader"
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1jhaN9rbHmW5J9TpgEFlNvS9PPxtskbGE/view?usp=drive_link"
                className="buttonheader"
              >
                References
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/SzpZBPXPVA">
                <i class="fab fa-discord"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
