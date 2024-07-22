import "../App.css";

function Nav() {
    return (
        <>
        <nav>
            <div className="navbar">
                <ul>
                    <li><button><a href="#">About</a></button></li>
                    <li><button><a href="#">Random stuff</a></button></li>
                    <li><button><a href="#">Gallery</a></button></li>
                    <li><button><a href="#">Food I like</a></button></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav;