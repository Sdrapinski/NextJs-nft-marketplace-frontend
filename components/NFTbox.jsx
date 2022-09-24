import React, { useState } from "react";
import { useWeb3Contract } from "react-moralis";

const NFTbox = ({ price, nftAddress, tokenId, marketplaceAddress, seller }) => {
  const [imageURI, setimageURI] = useState("");
  const { runContractFunction: getTokenURI } = useWeb3Contract();
  async function updateUI() {}
  return <div>NFTbox</div>;
};

export default NFTbox;
