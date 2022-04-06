import styled from "styled-components";
import { CardComponent } from "./CardComponent";
import { assets } from "../../dummyAssets";

export const NftContainer = () => {
  return (
    <CardsContainer>
      {assets.map(
        (
          {
            image_url,
            name,
            description,
          }: { image_url: string; name: string; description: string },
          index: number
        ) => {
          return (
            <CardComponent
              img={image_url}
              key={index}
              name={"description"}
              description={"name"}
            />
          );
        }
      )}
    </CardsContainer>
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
