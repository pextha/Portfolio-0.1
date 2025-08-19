import '../CSS/NavBar.css';


function NavBar(){

    return (
        <>
        <nav className="navbar">
            <div>
                <img src="/assets/logo.png" alt="logo" className="logo" />
            </div>
           <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
           </ul>

           <div>
                <button className="contact-button">Contact Me</button>
           </div>
        </nav>
       
        </>
    )

    

}

export default NavBar;