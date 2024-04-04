import * as React from "react";
import { useState, useEffect } from "react";
import LoadingImage from "../components/LoadingImage";

const ProgrammingLanguages = () => {
  const [lanaguageData, setLanguageData] = useState([]);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://8bit-backend-mock-project.vercel.app/api/programming-languages`
        );
        const data = await res.json();
        setLanguageData(data);
        console.log(data);
      } catch (e: any) {
        console.log(e);
      } finally {
        setPageReady(true);
      }
    };

    fetchData();
  }, []);

  return pageReady ? (
    <>
      <div className="container text-left my-5">
        {lanaguageData.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h3 className="card-subtitle">{item.name}</h3>
              <p className="card-subtitle py-1" style={{ color: "grey" }}>
                {item.short_description}
              </p>
              <div className=" card-subtitle my-2">
                <hr></hr>
                <div className="d-flex justify-content-center flex-column">
                  <div className="pb-2">{item.text_content}</div>
                  <div className="row justify-content-evenly pt-2">
                    {item.images.map((image: any, index: any) => (
                      <div key={index} className="col-12">
                        <LoadingImage
                          imageUri={image.image}
                          className="img-fluid shadow-lg mb-5 bg-body rounded w-100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center">
      <div className="spinner-border my-5"></div>
    </div>
  );
};

export default ProgrammingLanguages;
