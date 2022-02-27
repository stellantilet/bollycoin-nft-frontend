import { ContractReceipt, ContractTransaction, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { NetworkId } from "../../config/constants/types";
import ERC721BollyCoin from "../../config/contracts/ERC721BollyCoin";
import { useOnboardContext } from "../../context/OnboardContext";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const MintCard = ({
  nftType = "Platinum",
  image = "assets/images/mint/ticket-1.png",
  price = 0.1,
  disabled = false,
}) => {
  const [loading, setLoading] = useState(false);
  const { onboard } = useOnboardContext();
  const handleMint = async (nftType: string) => {
    const value = await onboard.walletCheck();
    if (!value) {
      return;
    }
    const userState = onboard.getState();
    const provider = new ethers.providers.Web3Provider(
      userState.wallet.provider
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      ERC721BollyCoin.address[userState.network as NetworkId],
      ERC721BollyCoin.abi,
      signer
    );
    const price = await contract.price(nftType);
    setLoading(true);
    try {
      let tx: ContractTransaction = await contract.mint(nftType, {
        value: price,
      });
      let receipt: ContractReceipt = await tx.wait();
      const events = receipt.events?.filter((x) => {
        return x.event === "Transfer";
      });
      if (events && events.length > 0) {
        toast.success("Mint successfully.");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  return (
    <div className="col-lg-3 col-sm-6 col-6">
      <div className="blog-item">
        <div className="nft-inner">
          <div className="nft-thumb">
            <img src={image} alt="blog-img" />
          </div>
          <div className="nft-content">
            <div className="author-details">
              <h4>
                <span>{nftType}</span>
              </h4>
              <div className="detail">
                <p className="nft-price">
                  Price: <span className="yellow-color">{price} ETH</span>
                </p>
                <button
                  disabled={disabled || loading}
                  onClick={() => {
                    handleMint(nftType);
                  }}
                  className="default-btn move-top"
                >
                  <span>
                    {loading && <CgSpinner className="spin" />}
                    Mint
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Mint = () => {
  const { onboard } = useOnboardContext();
  const userState = onboard.getState();
  const disabled = !userState.address;

  useEffect(() => {});

  return (
    <section className="blog-section padding-top" id="mint">
      <div className="container">
        <div className="section-header style-2">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Mint</h3>
        </div>

        <div className="section-wrapper">
          <div className="blog-wrapper">
            <div className="row justify-content-center gx-4 gy-2">
              <MintCard
                image="/assets/images/mint/ticket-1.png"
                nftType="Plantinum"
                price={3}
                disabled={disabled}
              />
              <MintCard
                image="/assets/images/mint/ticket-2.png"
                nftType="Gold"
                price={2}
                disabled={disabled}
              />
              <MintCard
                image="/assets/images/mint/ticket-3.png"
                nftType="Silver"
                price={1}
                disabled={disabled}
              />
              <MintCard
                image="/assets/images/mint/ticket-1.png"
                nftType="Bronze"
                price={0.5}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
