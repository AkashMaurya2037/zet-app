import Link from "next/link";
import Image from "next/image";
import zet_logo from "../assets/zet_logo.svg";
import { useRouter } from "next/router";

export default function navbar() {
  const router = useRouter();

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid navb" >
          <Link className="navb__link" href="/">
          <Image className="navb__logo" Priority  width="370" height="150" src={zet_logo} alt="ZetApp" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navb__ul ms-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`${
                    router.pathname === "/" ? "active" : "tab__text"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`${
                    router.pathname === "/about" ? "active" : "tab__text"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/partner"
                  className={`${
                    router.pathname === "/partner" ? "active" : "tab__text"
                  }`}
                >
                  Partner Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className={`${
                    router.pathname === "/blog" ? "active" : "tab__text"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
              <button className="button-D" >Download ZET</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navb">
      <div >
      <Link href="/" >
        <Image className="navb__logo" Priority  width="370" height="150" src={zet_logo} alt="ZetApp" />
      </Link>
      </div>
        <div className="navb__tab" >
            <Link href="/" className={`${router.pathname === "/" ? "current__tab" : "tab__text"}`} >Home</Link>
            <Link href="/about" className={`${router.pathname === "/about" ? "current__tab" : "tab__text"}`} >About Us</Link>
            <Link href="/partner" className={`${router.pathname === "/partner" ? "current__tab" : "tab__text"}`} >Partner With Us</Link>
            <Link href="/blog" className={`${router.pathname === "/blog" ? "current__tab" : "tab__text"}`} >Blog</Link>
            <div>
            <button className="button-D" >Download ZET</button>
            
            </div>
            <div >
            <img src="https://zetapp.in/_next/static/media/menuIcon.bc0b4f4a.svg" width="42" height="42" />
            <img src="https://zetapp.in/_next/static/media/closeIcon.10e5e22a.svg" width="34" height="34" />
            </div>
        </div>
        
      </nav> */}
    </>
  );
}
