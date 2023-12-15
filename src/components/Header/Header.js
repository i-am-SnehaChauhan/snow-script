import "./Header.css";
import logo from "../../assets/logogdsc.png"
function Header()
{
    return(
        <>
        <header class="header">
            <nav>
                <div class="logo">
                <a href="index.html"><img src={logo} className="logogdsc"></img></a>
                </div>
                <input type="checkbox" id="menu-toggle"/>
                <label for="menu-toggle" class="menu-icon">&#9776;</label>
                <ul class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/">Timeline</a></li>
                <li><a href="/">How to Contribute</a></li>
                <li><a href="/prizes">Prizes</a></li>
                <li><a href="/prizes" className="buttonheader">Register</a></li>
                <li><a href="/prizes" className="buttonheader">References</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header;