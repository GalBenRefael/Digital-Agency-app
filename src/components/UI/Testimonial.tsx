import "../../styles/testimonial.css";

import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";
import Slider from "react-slick";

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoPlay: true,
    autoPlaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="slider_content-top">
            <h6 className="subtitle">Testimonials</h6>
            <h2>
              Trusted by more than{" "}
              <span className="highlight">5,000 customers</span>
            </h2>
          </div>

          <div className="slider_wrapper">
            <Slider {...settings}>
              <div className="slider_item">
                <p className="description">
                  Choosing MOM was the best decision we made for our business.
                  Their dedicated team's commitment to excellence and innovation
                  is evident in the outstanding web development and design work
                  they delivered. What truly sets them apart is their unwavering
                  support. We've experienced their 24/7 support firsthand, and
                  it's truly a game-changer. MOM is more than a service
                  provider; they're a reliable partner invested in our success.
                </p>

                <div className="customer_details">
                  <div className="customer_img">
                    <img src={ava01} alt="" />
                  </div>

                  <div>
                    <h5 className="customer_name">John Dow</h5>
                    <p className="description">CEO, Workcreation</p>
                  </div>
                </div>
              </div>

              <div className="slider_item">
                <p className="description">
                  Working with MOM was an absolute pleasure. Their team's
                  expertise in web development and design is truly remarkable.
                  They took the time to understand our vision and turned it into
                  a stunning reality. The attention to detail, prompt
                  communication, and dedication to our project made the entire
                  process seamless. We're thrilled with the results and highly
                  recommend MOM for anyone seeking top-notch digital solutions.
                </p>

                <div className="customer_details">
                  <div className="customer_img">
                    <img src={ava02} alt="" />
                  </div>

                  <div>
                    <h5 className="customer_name">Anny Martin</h5>
                    <p className="description">Software Developer</p>
                  </div>
                </div>
              </div>

              <div className="slider_item">
                <p className="description">
                  I can't speak highly enough about the team at MOM. Their
                  creative design, technical prowess, and strategic digital
                  marketing have significantly boosted our online presence. From
                  the initial consultation to the final implementation, they
                  exceeded our expectations every step of the way. Their
                  commitment to delivering exceptional results is truly
                  commendable. We're proud to have partnered with MOM and look
                  forward to continued success together.
                </p>

                <div className="customer_details">
                  <div className="customer_img">
                    <img src={ava03} alt="" />
                  </div>

                  <div>
                    <h5 className="customer_name">William Cooper</h5>
                    <p className="description">Sr. Product Designer</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
