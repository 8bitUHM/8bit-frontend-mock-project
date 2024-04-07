import * as React from "react";
import { useState, useEffect, FC } from "react";
import LoadingImage from "../components/LoadingImage";
import Navbar from "../components/Navbar";

interface Image {
  image: string;
}

interface LanguageItem {
  name: string;
  short_description: string;
  images: Image[];
}

const ProgrammingLanguages = () => {
  const [pageReady, setPageReady] = useState<boolean>(false);
  const [canMap, setCanMap] = useState<boolean>(false);
  const [languageData, setLanguageData] = useState<LanguageItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "apiUser";
        const password = "apiPassword";
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
      <Navbar/>
      <div className="container text-left my-5" style={{paddingTop:100}}>
        {canMap ? (
          languageData.map((item: LanguageItem, index: number) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h3 className="card-subtitle">{item.name}</h3>
                <p className="card-subtitle py-1" style={{ color: "grey" }}>
                  {item.short_description}
                </p>
                <hr />
                <div className="row justify-content-start pt-2">
                  {item.images.map((image: Image, index: number) => (
                    <div key={index} className="col-12 col-md-6">
                      <LoadingImage
                        imageUri={image.image}
                        className="img-fluid shadow-lg mb-5 bg-body rounded w-100"
                      />
                    </div>
                  ))}
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
    <>
      <Navbar/>
      <div className="d-flex justify-content-center" style={{paddingTop:100}}>
        <div className="spinner-border my-5"></div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
