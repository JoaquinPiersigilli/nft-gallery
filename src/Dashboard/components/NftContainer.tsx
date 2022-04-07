import styled from "styled-components";
import { CardComponent } from "./CardComponent";
import { dispatch, useSelector } from "../../AppEntryConfig/reduxStore";
import { useEffect } from "react";
import { OWNER_ADDRES, LIMIT } from "../../constants";
import { initThunk } from "../nftSlice";

export const NftContainer = () => {
  const { isLoading, isSuccess, assets } = useSelector((state) => state.nfts);

  useEffect(() => {
    dispatch(initThunk({ address: OWNER_ADDRES, limit: LIMIT }));
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : isSuccess ? (
    <CardsContainer>
      {assets.map(({ image_url, name, description }, index: number) => {
        return (
          <CardComponent
            img={image_url}
            key={index}
            name={name}
            description={description}
          />
        );
      })}
    </CardsContainer>
  ) : (
    <h1>Error while fetching nfts!</h1>
  );
};

const CardsContainer = styled.div`
  width: 90%;
  box-sizing: border-box;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;
