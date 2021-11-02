import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <img src="assets/images/logo-ALTA.png" alt="sample-logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="" className="nav-link link-primary">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link link-secondary">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link link-secondary">EXPERIENCE</a>
                        </li>
                        <li className="nav-item">
                            <a href="contact_us.html" className="nav-link link-secondary">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="profile">
            <img className="profile-img" src="assets/images/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" alt="" />
            <div className="profile-text">
                <p>Hi, my name is</p>
                <h1>Anne Sullivan</h1>
                <h2>I build things for the web</h2>
                <button type="button">Get in Touch</button>
            </div>
        </div>
    </div>
  );
}

export default App;
