import type { NextPage } from "next";
import React from "react";
import axios from "axios";
import Head from "next/head";

const Contact: NextPage = () => {
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();
  const [number, setNumber] = React.useState<number>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const sendEmail = () => {
    setIsLoading(true);
    const payload = {
      name: name,
      email: email,
      phone: number,
      message: message,
    };
    axios
      .post("https://lordbuddha.pythonanywhere.com/api/contact", payload)
      .then((res) => {
        alert("we will contact you as soon as possible");
      })
      .catch((err) => alert("Please check your inputs or try after some time"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Head>
        <title>Contact - Lord Buddha International School | GAYA</title>
      </Head>
      {isLoading ? (
        <div className="flex w-full py-60 flex-col items-center justify-center ">
          <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
          <span className="mt-2">Sending...</span>
        </div>
      ) : (
        <>
          <div className="container py-5">
            <div className="container bg-gradient py-5 px-5 rounded-5 text-black">
              <div>
                <h1>Contact Us</h1>
                <p>
                  You can reach us by filling out the contact form and we will
                  contact you as soon as possible.
                </p>
              </div>
              <hr color="white" />

              <div className="mb-3 mt-5">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="full name"
                  name="full_name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control bg-transparent"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="phone"
                  className="form-control bg-transparent"
                  id="exampleFormControlInput1"
                  placeholder="9999999999"
                  name="phone"
                  onChange={(e) => setNumber(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Query or Message</label>

                <textarea
                  className="form-control bg-transparent"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Query or Message ..."
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                onClick={sendEmail}
                className="btn btn-primary bg-blue-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
