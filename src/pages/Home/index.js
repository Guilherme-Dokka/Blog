import Banner from "./Banner";
import Card from "./Card";
import Hero from "./Hero";
import Main from "./Main";

import star from "svg/icon-star.svg";

import { useState, useEffect } from "react";
import api from "services/api";

const Home = () => {
  const [main, setMain] = useState([]);
  const [mostseen, setmostseen] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    api.get("/posts?star=5&_limit=2").then((result) => {
      setMain(result.data);
    });

    api.get("/posts?_sort=date&_order=desc&_limit=1").then((result) => {
      setBanner(result.data);
    });
    api.get("/posts?_sort=views&_order=desc&_limit=3").then((result) => {
      setmostseen(result.data);
    });
  }, []);

  return (
    <>
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-5 pt-5 pb-3">
            <img src={star} className="icon-l" alt="" />
            <h2 className="mt-1">Os melhores e mais bem votados do mês</h2>

            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
            <div className="mt-2 flex-space">
              <div className="flex-start-row">
                <div className="profile">
                  <img src="profile/ny.jpg" className="profile-img" alt="" />
                </div>
                <div className="ml-2">
                  <h6 className="color-primary">Násser Yousef Ali</h6>
                  <h6 className="color-gray">Author</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-7">
            {main.map((item) => {
              return <Main key={item.id} content={item} />;
            })}
          </div>
        </div>
      </section>

      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
          <div className="row">
            {mostseen.map((item) => {
              return <Card key={item.id} content={item} />;
            })}
          </div>
        </section>
      </div>
      {banner.map((item) => {
        return <Banner key={item.id} content={item} />;
      })}
    </>
  );
};

export default Home;
