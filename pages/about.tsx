import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Lord Buddha International School | GAYA</title>
      </Head>
      <div className="container py-5">
        <div className="container bg-logo bg-blue-500 py-5 px-5 rounded-5 text-white">
          <div>
            <h1>About Us</h1>
            <p>
              Welcome to Lord Buddha International School, your number one
              source for education for predefined education. We are dedicated to
              providing you the very best quality of education, with an emphasis
              on student weakness, Student discipline, and for perfect
              education. Lord Buddha International School has come a long way
              from its beginnings in Gaya,Bihar. When Yogendra Prasad Verma
              first started out, his passion for providing education in
              different regions in gaya drove them to start their own business
              through this site so that every Student could get fair education.
              We hope you will be educated in such a manner that we hope for
              offering kind of education to you. If you have any questions or
              comments, please don not hesitate to contact us.
              <br />
              <br />
              Sincerely,
              <br />
              Lord Buddha International School(Team)
            </p>
          </div>
          <hr color="white" />
          <div className="row mt-5">
            <div className="col px-5">
              <img
                src="/director.jpg"
                alt=""
                width="70%"
                className="shadow rounded-5"
              />
              <h5 className="h5 mt-1">Yogendra Prasad Verma (Director)</h5>
            </div>
            <div className="col px-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIV1ppwChzluddwMfC-9jCDE7uSri4SAqhw&usqp=CAU"
                alt=""
                width="80%"
                className="shadow rounded-5"
              />
              <h5 className="h5 mt-1">Sweta Verma (Principal)</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
