import React from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";
import "swiper/css/pagination";

interface Gallery {
  eid: number;
  name: string;
  image_url: string;
  isVideo: boolean;
}

interface Notice {
  nid: number;
  notice: string;
  description: string;
}

export const HomeCom = () => {
  const [images, setImages] = React.useState<Gallery[]>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [nloading, setNloading] = React.useState<boolean>(true);
  const [notices, setNotices] = React.useState<Notice[]>();

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://lordbuddha.pythonanywhere.com/api/gallery")
      .then((res) => {
        if (res.data?.Gallery.length > 6) {
          setImages(res.data?.Gallery.slice(0, 6));
        } else {
          setImages(res.data?.Gallery);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    setNloading(true);
    axios
      .get("https://lordbuddha.pythonanywhere.com/api/notice")
      .then((res) => setNotices(res.data?.Notices))
      .finally(() => setNloading(false));
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/banner.jpeg"
              className="d-block w-full sm:h-[36rem] h-[24rem] cover object-cover"
              loading="eager"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/slide3.jpg"
              className="d-block w-full sm:h-[36rem] h-[24rem] cover object-cover"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/slide4.jpg"
              className="d-block w-full sm:h-[36rem] h-[24rem] cover object-cover"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="row featurette">
          <div className="col-md-7 py-5">
            <h2 className="featurette-heading text-xl font-bold">About Us</h2>
            <p className="text-base mt-2">
              Lord Buddha International School is a reputed private school in
              Gaya city established in 2014 by director Yogendra Prasad Verma
              and principal Sweta Kumari (International Chess Player). Our
              school has all the facilities for sports, study and other
              activities. Our school has the main aim to not teach but educate
              students because we make a personality, not an employee.
            </p>
            <span className="btn btn-secondary mt-2">
              <Link href="/about">Read more</Link>
            </span>
          </div>
          <div className="col-md-5 py-5 flex justify-center items-center flex-col ">
            <img
              className="
          col
            bd-placeholder-img bd-placeholder-img-lg
            featurette-image
            img-fluid
            mx-auto 
            contain
          "
              width="300px"
              loading="eager"
              src="/director.jpg"
            />
            <br />
            <span className="text-center">
              Yogendra Prasad Verma (Director)
            </span>
          </div>
        </div>
      </div>

      <div className="bg-info bg-gradient py-5 mt-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="featurette-heading text-xl font-bold mb-2">
                Latest Notification
              </h2>
            </div>
          </div>
          <div className="swiper mySwiper mt-4">
            <div className="swiper-wrapper">
              {nloading ? (
                <div className="flex w-full items-center justify-center ">
                  <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                </div>
              ) : (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                  }}
                  breakpoints={{
                    350: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },

                    800: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {notices?.map((notice) => (
                    <SwiperSlide key={notice.nid}>
                      <div className="swiper-slide bg-blue-400 bg-opacity-40 rounded-lg py-4 rounded-5">
                        <div className="p-5">
                          <h3>{notice.notice}</h3>
                          <p>{notice.description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2 mt-5">
            <h2 className=" text-xl font-bold mb-2">Gallery</h2>
          </div>
        </div>
        <div className="container bg-theme bg-gradient py-4 rounded-sm mt-4">
          <div
            id="container-gallery"
            className="row row-cols-1 row-cols-md-3 g-4 "
          >
            {loading ? (
              <div className="flex w-full items-center justify-center ">
                <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
              </div>
            ) : (
              images?.map((image) => (
                <div key={image.eid} className="col">
                  {image.isVideo ? (
                    <video
                      width="150px"
                      controls
                      className="rounded-lg shadow-lg card-img-top"
                      preload="metadata"
                      controlsList="nodownload"
                    >
                      <source src={image?.image_url} />
                    </video>
                  ) : (
                    <img
                      src={image?.image_url}
                      className="card-img-top rounded-lg shadow-lg"
                      alt="..."
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="col-md-2 mt-4">
          <span className="btn btn-secondary">
            <Link href="/gallery">See More</Link>
          </span>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <h2 className="featurette-heading text-xl font-bold mb-2">
              Our Faculties
            </h2>
          </div>
        </div>
        <div className="row left">
          <div className="col card-limit">
            <div className="card rounded-5 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Extra className</h5>
                <h6 className="card-subtitle mb-2 text-muted">study</h6>
                <p className="card-text">
                  Extra className for maths and other subjects in which students
                  have problems
                </p>
              </div>
            </div>
          </div>
          <div className="col card-limit">
            <div className="card rounded-5 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Personality Development</h5>
                <h6 className="card-subtitle mb-2 text-muted">extra</h6>
                <p className="card-text">
                  We provide personality development className for students to
                  create a great personality
                </p>
              </div>
            </div>
          </div>
          <div className="col card-limit">
            <div className="card rounded-5 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">English and Hindi</h5>
                <h6 className="card-subtitle mb-2 text-muted">conversation</h6>
                <p className="card-text">
                  We provide an extra className for each language to develop a
                  better speaking quality
                </p>
              </div>
            </div>
          </div>
          <div className="col card-limit">
            <div className="card rounded-5 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Weekly Test</h5>
                <h6 className="card-subtitle mb-2 text-muted">result</h6>
                <p className="card-text">
                  Every parent expect a better result from their child so we
                  take a weekly test to check student improvement
                </p>
              </div>
            </div>
          </div>
          <div className="col card-limit">
            <div className="card rounded-5 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Scientific pedagogy and GS className
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">extra</h6>
                <p className="card-text">
                  We provide scientific facts and general information to our
                  students so they can always be updated with the latest
                  information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-56"></div>
    </>
  );
};
