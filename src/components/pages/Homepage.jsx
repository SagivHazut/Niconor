import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import "./Homepage.css";

import log1 from "../../assets/gate1.jpg";
import log2 from "../../assets/gate2.jpg";
import log3 from "../../assets/gate3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//https://www.somfy.co.il/?utm_source=search&utm_medium=brand&utm_campaign=bny2022&gclid=Cj0KCQjwjN-SBhCkARIsACsrBz5u3Bh9mhPBGuS3UvM06wJkqbcsLbBiRwPwMWt5LLtajYYSEJIeYWAaAj-pEALw_wcB
const HomePage = () => {
  return (
    <Fragment>
      <div>
        <Carousel
          className="main-slide"
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          dynamicHeight={true}
          showThumbs={false}
        >
          <div>
            <div className="imageone">
              <h1 className="header">
                שעריים חשמליים ממונעים
                <br />
                <NavLink
                  className="nav-links"
                  aria-current="page"
                  to="/products"
                  activeClassName="activeLink"
                >
                  לפרטים נוספים
                </NavLink>
              </h1>
              <img src={log1} alt="" width="90vw" height="880vh" />

              <p className="legend">Legend 1</p>
            </div>
          </div>
          <div className="imageone">
            <h1 className="header">
              שעריים חשמליים ממונעים
              <NavLink
                className="nav-links"
                aria-current="page"
                to="/products"
                activeClassName="activeLink"
              >
                לפרטים נוספים
              </NavLink>
            </h1>
            <img src={log2} alt="" width="90vw" height="880vh" />

            <p className="legend">Legend 2</p>
          </div>
          <div className="imageone">
            <h1 className="header">
              שעריים חשמליים ממונעים
              <NavLink
                className="nav-links"
                aria-current="page"
                to="/products"
                activeClassName="activeLink"
              >
                לפרטים נוספים
              </NavLink>
            </h1>

            <img src={log3} alt="" width="90vw" height="880vh" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
        <br />
        <div className="somfey">
          <h1>פתרונות לבית חכם מבית Somfy, השותפים שלכם בבית</h1>
        </div>
        <div className="images">
          <div className="imagesfirstrow">
            <div class="container">
              <img src={log3} alt="" className="image"></img>
              <div class="overlay">
                <div class="text">
                  <p> Hello World</p>
                  <NavLink
                    className="nav-links"
                    aria-current="page"
                    to="/products"
                    activeClassName="activeLink"
                  >
                    לפרטים נוספים
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="container">
              <img src={log3} alt="" className="image"></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <p> Hello World</p>
                  <NavLink
                    className="nav-links"
                    aria-current="page"
                    to="/products"
                    activeClassName="activeLink"
                  >
                    לפרטים נוספים
                  </NavLink>
                </div>
              </div>
            </div>{" "}
            <div class="container">
              <img src={log3} alt="" className="image"></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <p> Hello World</p>
                  <NavLink
                    className="nav-links"
                    aria-current="page"
                    to="/products"
                    activeClassName="activeLink"
                  >
                    לפרטים נוספים
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="imagesfirstrow">
            <div class="container">
              <img src={log3} alt="" className="image"></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <p> Hello World</p>
                  <NavLink
                    className="nav-links"
                    aria-current="page"
                    to="/products"
                    activeClassName="activeLink"
                  >
                    לפרטים נוספים
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="container">
              <img src={log3} alt="" className="image"></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <p> Hello World</p>
                  <NavLink
                    className="nav-links"
                    aria-current="page"
                    to="/products"
                    activeClassName="activeLink"
                  >
                    לפרטים נוספים
                  </NavLink>
                </div>
              </div>
            </div>{" "}
            <div class="container">
              <img src={log3} alt="" className="image"></img>
              <div class="overlay">
                <div class="text">
                  {" "}
                  <p> Hello World</p>
                  <NavLink
                    className="nav-links"
                    aria-current="page"
                    to="/products"
                    activeClassName="activeLink"
                  >
                    לפרטים נוספים
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="somfey">
          <h1>פתרונות לבית חכם מבית Somfy, השותפים שלכם בבית</h1>
        </div>
        <Carousel
          className="seconed-slide"
          showThumbs={true}
          showStatus={false}
          dynamicHeight={false}
          showArrows={false}
          showIndicators={false}
        >
          <div>
            <div className="imagetwo">
              <img src={log1} alt="" />
            </div>
          </div>
          <div className="imagetwo">
            <img src={log2} alt="" />
          </div>
          <div className="imagetwo">
            <img src={log3} alt="" />
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default HomePage;
