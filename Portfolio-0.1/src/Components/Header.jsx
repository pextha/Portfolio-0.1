import '../CSS/Header.css';


function header() {
    return (
        <header className="header">
            <div className="content">
                <div className="text-content">
                    <h1>
                        I am a skilled <br/><span>Full-Stack Developer</span>
                    </h1>
                    <p>with experience in building robust, scalable, and efficient web applications from front-end and back-end functionality.</p>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                </div>
                <div className="image-content">
                    <div className="speech-bubble">Hi! I’m Pathum Premawansha</div>
                    <img src="/assets/developer.png" alt="Developer" className="developer-image" />
                    <img src="/assets/circle.png" alt="circle" className="circle-image" />
                </div>
            </div>
        </header>
    );

}
export default header;