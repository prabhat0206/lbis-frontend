import React from "react";
import { navigationProps } from "./Navigation";

export const Footer = () => {
  return (
    <>
      <footer
        className="bg-secondary bg-gradient py-4 pt-5"
        style={{ color: "#fff" }}
      >
        <div className="container">
          <div className="row featurette">
            <div className="col-md-3">
              <img src="/logo.png" alt="" width="200px" />
              <p>
                Lord Buddha International School is a reputed private school in
                Gaya city established in 2014 by Mr. Yogendra Prasad Verma (IAS
                Apparent).
              </p>

              <a href="/about-us" className="btn btn-outline-light">
                Read More
              </a>
            </div>
            <div className="col-md-2">
              <h5>Other Links</h5>
              <div className="">
                {navigationProps.map((link) => (
                  <a
                    key={link?.id}
                    href="/"
                    className="btn btn-outline-light mb-1"
                  >
                    {link?.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-md-3">
              <h5>Contact</h5>
              <div>
                <span>
                  <i className="fas fa-phone"></i> Phone: 9709445846
                </span>
                <br />
                <span>
                  <i className="fas fa-envelope"></i>
                  Email:{" "}
                  <a href="mailto:yogendrav234@gmail.com">
                    yogendrav234@gmail.com
                  </a>
                </span>
              </div>
            </div>

            <div className="col-md-3">
              <h5>
                <i className="fas fa-map"></i> Address
              </h5>
              <span> Dandibag road, bypass, Gaya </span>
              <br />
              <span>Gaya - 823001</span>
              <br />
              <span>Bihar</span>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-dark" style={{ color: "#fff" }}>
        <div className="container p-2">
          <span>
            Copyright &copy;
            <a
              style={{ color: "#fff" }}
              href="https://www.instagram.com/encoded_programmer/"
            >
              Encoded Programmer ( designer and developer )
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
