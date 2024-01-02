import React from "react";
import Link from "next/link";
import Image from "next/image";
import '../../styles/navbar.css'

const listLinks = ["Financing", "Candidates", "Alumni", "Contact"]

const MiniBar = () => {
  return (
    <div className="minibar ">
      <p>Speak to an Admission Advisor
        <Link href="/contact" style={{ textDecoration: "underline" }}>..Schedule a Call</Link>
      </p>
    </div>
  )
}

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar-container" >

          <div className="navbar-links">

            <Link href="#home">
              <Image
                src="/images/bocacode.png"
                width={124}
                height={40}
                alt="bocacode"
                style={{
                  display: "flex",
                  verticalAlign: "center"
                }}
              />
            </Link>

            <ul className="navbar-list list-none" >


              <li className="navbar-item dropdown">

                <Link href="/courses" className="dropdown-btn">Courses</Link>

                <div className="list-style-none bg-zinc dropdown-content rounded-4">
                    <Link href="/courses/career/software-engineering" className="dropdown-item rounded-4">Software Engineering Career Track</Link>
                </div>
              </li>

              {listLinks.map((item, index) => {
                return (
                  <li className="navbar-item">
                    <Link style={{ padding: "0 0 8px 0" }} href={item.toLowerCase()}>{item}</Link>
                  </li>
                )
              })
              }
            </ul>
          </div>
          <div className="button">
            <Link href="#home">Get Started</Link>
          </div>

        </nav>
        <MiniBar />

      </header >

    </>
  );
};

export default Navbar;