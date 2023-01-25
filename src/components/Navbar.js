import "./Navbar.scss"

export default function Navbar() {
    return (
        <div>
            <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
                <label className="logo">Team OJAS</label>
                    <ul>
                        <li><a href="index.html"><i class="fa-solid fa-house"></i>Home</a></li>
                        <li><a href="index.html"><i class="fa-solid fa-diagram-project"></i>Projects</a></li>
                        <li><a href="index.html"><i class="fa-solid fa-people-group"></i>Team</a></li>
                        <li><a href="index.html"><i class="fa-solid fa-circle-info"></i>About Us</a></li>
                        <li><a href="index.html"><i class="fa-sharp fa-solid fa-calendar-days"></i>Events</a></li>
                    </ul>
            </nav>
        </div>
    )
}

