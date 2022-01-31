import React from "react";
import Image from "next/image";
import Link from "next/link";

export const navigationProps = [
  {
    id: 44654,
    name: "Home",
    link: "/",
  },
  {
    id: 44651,
    name: "Gallery",
    link: "/gallery",
  },
  ,
  {
    id: 44653,
    name: "About Us",
    link: "/about",
  },
  {
    id: 44655,
    name: "Contact Us",
    link: "/contact",
  },
];

export const Navigation = () => {
  return (
    <nav
      id="navbar_top"
      className="navbar sticky-top navbar-expand-lg navbar-light bg-light"
    >
      <div className="container-fluid  justify-between w-full">
        <Link href="/">
          <Image src="/logo.png" alt="" height={43} width={150} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navigationProps.map((link) => (
              <li key={link?.id} className=" p-1">
                <span className="nav-link">
                  <Link aria-current="page" href={link ? link.link : ""}>
                    {link?.name}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
