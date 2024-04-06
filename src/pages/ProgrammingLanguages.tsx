import * as React from "react";
import { useState, useEffect } from "react";
import LoadingImage from "../components/LoadingImage";

const ProgrammingLanguages = () => {
  const [languageData, setLanguageData] = useState([]);
  const [pageReady, setPageReady] = useState(false);
  const [canMap, setCanMap] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = process.env.MOCK_API_USERNAME;
        const password = process.env.MOCK_API_PASSWORD;
        const encodedCredentials = btoa(`${username}:${password}`);

        const headers = new Headers();
        headers.append("Authorization", `Basic ${encodedCredentials}`);
        
        const res = await fetch(
          `https://8bit-backend-mock-project.vercel.app/api/programming-languages`,
          { method: "GET", headers: headers }
        );
        if (res.ok) {
          const data = await res.json();
          setLanguageData(data);
          setCanMap(true);
        }
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
        {canMap ? (
          languageData.map((item, index) => (
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
          ))
        ) : (
          <div>
            Uh oh! Something went wrong with our request for data. Please
            refresh and try again!
          </div>
        )}
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center">
      <div className="spinner-border my-5"></div>
    </div>
  );
};

export default ProgrammingLanguages;
