import "./Header.css"
function Header()
{
    return(
        <>
        <header class="header">
            <nav>
                <div class="logo">
                <a href="index.html">Snow Script Winter Of Code</a>
                </div>
                <input type="checkbox" id="menu-toggle"/>
                <label for="menu-toggle" class="menu-icon">&#9776;</label>
                <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Events</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header;