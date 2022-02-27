import { UserState } from "bnc-onboard/dist/src/interfaces";
import React from "react";
import { useOnboardContext } from "../../../context/OnboardContext";

const Header = () => {
  const { setup, onboard } = useOnboardContext();

  const handleConnectWallet = async () => {
    onboard.config({ darkMode: true });
    setup();
  };

  const userState: UserState = onboard.getState();
  const { address } = userState;
  let addressShorten = "";
  if (address) {
    addressShorten = `${address.substring(0, 6)}...${address.substring(
      address.length - 4,
      address.length
    )}`;
  }
  return (
    <header className="header ">
      <div className="container-fluid">
        <div className="header__content">
          <div className="header__logo">
            <a href="index.html">Letscollect</a>
          </div>

          <div className="header__menu ms-auto">
            <ul className="header__nav mb-0">
              <li className="header__nav-item active">
                <a href="#mint" className="header__nav-link">
                  Mint
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#about" className="header__nav-link">
                  Our Story{" "}
                </a>
              </li>
              <li className="header__nav-item">
                <a href="#team" className="header__nav-link">
                  Team{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="header__actions">
            <button
              data-blast="bgColor"
              onClick={() => {}}
              className="default-btn move-top"
            >
              {addressShorten ? (
                <img
                  src={userState.wallet.icons.iconSrc}
                  alt="wallet-icon"
                  width="28px"
                />
              ) : null}
              {addressShorten ? `${addressShorten}` : "Connect"}
            </button>
          </div>

          <button className="menu-trigger header__btn" id="menu05">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
