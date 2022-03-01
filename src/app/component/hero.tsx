import React from "react";

const SliderItem = ({ image }: { image: any }) => {
  return (
    <div className="swiper-slide">
      <div className="nft-item home-3">
        <div className="nft-inner">
          <div className="nft-item-top d-flex justify-content-between align-items-center"></div>
          <div className="nft-item-bottom">
            <div className="nft-thumb text-center">
              <img
                loading="lazy"
                src={image}
                alt="nft-img"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-wrapper">
          <div className="row align-items-center g-5" id="slide-img">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="nft-slider-wrapper">
                <div className="banner-item-slider">
                  <div className="swiper-wrapper">
                    <SliderItem image="/assets/images/mint/Plantinum.png" />
                    <SliderItem image="/assets/images/mint/Gold.png" />
                    <SliderItem image="/assets/images/mint/Silver.png" />
                    <SliderItem image="/assets/images/mint/Bronze.png" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
