import logo from "../../public/images/logo.svg";
import github from "../../public/images/github.svg";
import facebook from "../../public/images/facebook.svg";
import twitter from "../../public/images/twitter.svg";
import instagram from "../../public/images/instagram.svg";
import Image from "next/image";

export default function Footer() {
    return (
      <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 md-md-0 text-muted text-decoration-none lh-1" >© </a>
            {/* <svg className="bi" width="30" height="24">
              
            </svg> */}
              
            <Image src={logo} width="144" height="54"/>
            
          </div>  
      
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="#"><Image src={twitter} className="bi" width="24" height="24" /></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><Image src={instagram} className="bi" width="24" height="24" /></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><Image src={facebook} className="bi" width="24" height="24" /></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><Image src={github} className="bi" width="24" height="24" /></a></li>
          </ul>
      
        </footer>
      </div>
    );
  }