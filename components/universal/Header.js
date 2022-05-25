import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";


function Header() {
    return (
      <header>
        <NavBar />
      </header>
    );
  }

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                    <a className="navbar-brand" href="/">
                    <Image src ={logo} alt="logo" height="100px" width="300px"/>
                    </a>
                                

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <nav>
                        
                    </nav>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-about" aria-selected="false">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" id="nav-tds-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-tds" aria-selected="false">TDs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" id="nav-consituencies-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-constituencies" aria-selected="false">Constituencies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" id="nav-parties-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-parties" aria-selected="false">Parties</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                        </li>
                    </ul>   
                </div>

            </div>
        </nav>
        </>
    );
}

export default Header;
