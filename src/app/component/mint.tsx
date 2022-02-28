/* eslint-disable react-hooks/exhaustive-deps */
import {
  BigNumber,
  ContractReceipt,
  ContractTransaction,
  ethers,
} from "ethers";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { BlockNetworkId, NetworkRPC } from "../../config/constants/common";
import { NetworkId } from "../../config/constants/types";
import ERC721LetsCollect from "../../config/contracts/ERC721LetsCollect";
import { useOnboardContext } from "../../context/OnboardContext";

const MintCard = ({
  nftType = "Platinum",
  image = "assets/images/mint/ticket-1.png",
  disabled = false,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const { onboard } = useOnboardContext();
  const [price, setPrice] = useState(0);
  const [currentSupply, setCurrentSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);

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
      ERC721LetsCollect.address[userState.network as NetworkId],
      ERC721LetsCollect.abi,
      signer
    );
    const price = await contract.price(nftType);
    setSubmitting(true);
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
      loadData();
    } catch (error: any) {
      toast.error(error.message);
    }
    setSubmitting(false);
  };

  const loadData = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        NetworkRPC[BlockNetworkId as NetworkId] as string
      );
      const contract = new ethers.Contract(
        ERC721LetsCollect.address[BlockNetworkId as NetworkId],
        ERC721LetsCollect.abi,
        provider
      );
      const price = await contract.price(nftType);
      const currentSupply = await contract.currentSupply(nftType);
      const maxSupply = await contract.maxSupply(nftType);
      setPrice(price.div(BigNumber.from("10000000000000000")).toNumber() / 100);
      setCurrentSupply(currentSupply.toNumber());
      setMaxSupply(maxSupply.toNumber());
    } catch (error: any) {
      // await setTimeout(() => {}, 10000);
      // await loadData();
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
                <p className="h5">
                  {maxSupply === 0 ? (
                    "__ / __ "
                  ) : (
                    <>
                      {currentSupply} / {maxSupply}
                    </>
                  )}
                </p>
                <p className="nft-price">
                  Price:{" "}
                  <span className="yellow-color">
                    {price === 0 ? "__" : price} ETH
                  </span>
                </p>
                <button
                  disabled={disabled || submitting}
                  onClick={() => {
                    handleMint(nftType);
                  }}
                  className="default-btn move-top"
                >
                  <span>
                    {submitting && <CgSpinner className="spin" />}
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
                disabled={disabled}
              />
              <MintCard
                image="/assets/images/mint/ticket-2.png"
                nftType="Gold"
                disabled={disabled}
              />
              <MintCard
                image="/assets/images/mint/ticket-3.png"
                nftType="Silver"
                disabled={disabled}
              />
              <MintCard
                image="/assets/images/mint/ticket-4.png"
                nftType="Bronze"
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
