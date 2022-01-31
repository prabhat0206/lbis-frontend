import type { NextPage } from "next";
import React from "react";
import axios from "axios";

interface Gallery {
  eid: number;
  name: string;
  image_url: string;
  isVideo: boolean;
}

const Gallery: NextPage = () => {
  const [images, setImages] = React.useState<Gallery[]>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [canShowDialog, setShowDialog] = React.useState<boolean>(false);
  const [currentDetail, setCurrentDetail] = React.useState<any>();

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("https://lordbuddha.pythonanywhere.com/api/gallery")
      .then((res) => setImages(res.data?.Gallery))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="py-3">
        <div className="container bg-secondary bg-gradient py-5 px-5 rounded-5 text-white">
          <h1>Image Gallery</h1>
          <p>
            All images are copyright protected and lisenced under Lord Buddha
            International School.
          </p>
        </div>
        <div className="container">
          <div className="container py-4 rounded-5 mt-4">
            <div
              className="row row-cols-1 row-cols-md-3 g-4"
              id="container-gallery"
              data-masonry='{"percentPosition": true,  "itemSelector": ".col" }'
            >
              {loading ? (
                <div className="flex w-full py-8 flex-col items-center justify-center ">
                  <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                  <span className="mt-2">Loading...</span>
                </div>
              ) : (
                images?.map((image) => (
                  <div
                    key={image.eid}
                    className="col"
                    onClick={() => {
                      setCurrentDetail(image);
                      setShowDialog(true);
                    }}
                  >
                    {image.isVideo ? (
                      <video
                        width="150px"
                        className="rounded-lg shadow-lg card-img-top"
                        preload="metadata"
                        controlsList="nodownload"
                      >
                        <source src={image?.image_url} />
                      </video>
                    ) : (
                      <img
                        src={image.image_url}
                        className="card-img-top rounded-lg shadow-lg"
                        alt="..."
                      />
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-10"></div>
      {canShowDialog ? (
        <PopUp
          {...currentDetail}
          closeFun={() => {
            setCurrentDetail(null);
            setShowDialog(false);
          }}
        />
      ) : null}
    </>
  );
};

const PopUp = ({ name, isVideo = false, image_url, closeFun }: any) => {
  return (
    <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50 ">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal-title">
              {name}
            </h5>
            <button
              type="button"
              className="btn-close bg-red-600 text-white"
              onClick={() => closeFun()}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            {isVideo ? (
              <video
                width="100%"
                controls
                className="rounded-5 shadow-lg"
                preload="metadata"
                controlsList="nodownload"
                autoPlay={true}
              >
                {" "}
                <source src={image_url} />{" "}
              </video>
            ) : (
              <img src={image_url} alt="" width="100%" />
            )}
          </div>
          <div className="modal-footer">
            <h6 id="type-container">Lord Budda International School</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
