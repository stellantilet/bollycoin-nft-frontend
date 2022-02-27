import React from "react";

export const Team = () => {
  return (
    <section className="ex-drop-section padding-top" id="team">
      <div className="container">
        <div className="section-header style-2">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Team</h3>
        </div>
        <div className="section-wrapper">
          <div className="ex-drop-wrapper">
            <div className="row justify-content-center gx-4 gy-3">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item home-2">
                  <div className="nft-inner">
                    <div className="nft-item-top d-flex justify-content-between align-items-center"></div>
                    <div className="nft-item-bottom">
                      <div className="nft-thumb">
                        <img
                          loading="lazy"
                          src="assets/images/team-1.jpg"
                          alt="nft-img"
                        />
                      </div>
                      <div
                        className="nft-content"
                        style={{ paddingBottom: "25px" }}
                      >
                        <h4>Vishal Malhotra</h4>
                        <h6>
                          <a href="#">(Founder)</a>
                        </h6>
                        <div className="price-like d-flex justify-content-between align-items-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item home-2">
                  <div className="nft-inner">
                    <div className="nft-item-top d-flex justify-content-between align-items-center"></div>
                    <div className="nft-item-bottom">
                      <div className="nft-thumb">
                        <img
                          loading="lazy"
                          src="assets/images/team-2.jpg"
                          alt="nft-img"
                        />
                      </div>
                      <div
                        className="nft-content"
                        style={{ paddingBottom: "25px" }}
                      >
                        <h4>Rick De</h4>
                        <h6>
                          <a href="#">(Project Head)</a>
                        </h6>
                        <div className="price-like d-flex justify-content-between align-items-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
