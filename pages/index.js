import { useMoralisQuery } from "react-moralis";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
    "ActiveItem",
    (query) => query.limit(10).descending("tokenId")
  );
  console.log(listedNfts);
  return (
    <div className={styles.container}>
      {fetchingListedNfts ? (
        <div>loading</div>
      ) : (
        listedNfts.map((nft) => {
          const { price, nftAddress, tokenId, marketplaceAddress, seller } =
            nft.attributes;
          return (
            <div>
              Price {price}, NftAddress: {nftAddress}. TokenId: {tokenId}.
              Seller:{seller}
            </div>
          );
        })
      )}
    </div>
  );
}
