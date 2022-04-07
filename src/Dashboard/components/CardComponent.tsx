import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {
  img: string;
  name: string;
  description: string;
};
export const CardComponent = ({
  img = "",
  name = "",
  description = "",
}: Props) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt="" />
      </ImgContainer>
      <ImageFooter>
        <ImageFooterInfo>
          <ImageFooterInfoWrapper>
            <Column>
              <Name>{name}</Name>
              <Description>{description}</Description>
            </Column>
            <AssetStock>
              Last
              <img
                src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                width="15"
                height="18"
                alt=""
                style={{ margin: "-2px 0.2rem" }}
              />
              <LastValue>0.03</LastValue>
            </AssetStock>
          </ImageFooterInfoWrapper>
        </ImageFooterInfo>
        <ImageFooterDetails>
          <BuyTextContainer>
            <BuyText
              className="hoverValue"
              onClick={() => alert("Congratz you bought the NFT")}
            >
              Buy now
            </BuyText>
          </BuyTextContainer>
          <RightDetails>
            <Icon>
              <FavoriteBorderIcon
                viewBox="0 0 26 24"
                style={{ height: "auto" }}
              ></FavoriteBorderIcon>
            </Icon>
            <p>2</p>
          </RightDetails>
        </ImageFooterDetails>
      </ImageFooter>
    </Item>
  );
};

const RightDetails = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(112, 122, 131);
`;

const Icon = styled.div`
  color: rgb(112, 122, 131);
  display: flex;
  justify-content: center;
  margin: 2px;

  &:hover {
    color: #d60909e1;
  }
`;

const BuyTextContainer = styled.div`
  box-sizing: border-box;
`;

const BuyText = styled.button`
  display: none;
  font-weight: 600;
  color: rgb(32, 129, 226);
  padding: 0;
  background: inherit;
  border: 0;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    color: rgb(24, 104, 183);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  width: 50%;
  flex: 1;
`;

const ImageFooterInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  min-height: min-content;
`;

const ImageFooter = styled.div`
  width: 100%;
  height: 8rem;
  margin: 0 auto;

  display: block;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
`;

const ImageFooterDetails = styled.div`
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  padding: 10px;
  background: linear-gradient(
    rgba(229, 232, 235, 0.392) 0%,
    rgb(255, 255, 255) 30%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  width: 15%;
  margin: 2rem 1rem;
  background-color: white;
  position: relative;
  overflow: hidden;

  border: 1px solid lightgrey;
  border-radius: 1rem;

  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-1rem) scale(1.05);
    cursor: pointer;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;

    .hoverValue {
      display: block;
    }
  }
  @media (max-width: 1400px) {
    width: 17%;
  }
  @media (max-width: 850px) {
    width: 25%;
  }
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 410px) {
    width: 60%;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    max-height: 240px;
  }
`;

const ImageFooterInfo = styled.div`
  height: 70%;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: space-between;
  align-items: start;
  overflow: auto;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

// const TextInformation = styled.div`
//   width: 100%;
//   height: 100%;

//   flex-direction: column;
// `;

const AssetStock = styled.div`
  font-family: inherit;
  color: grey;
  width: 50%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: end;
  align-items: start;
  font-size: 10px;

  @media (max-width: 1200px) {
    justify-content: start;
  }
`;

const LastValue = styled.p`
  font-weight: 700;
  color: black;
  margin: 0;
`;

const Name = styled.p`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  font-size: 0.75rem;
  margin: 0;
  padding: 0;
`;
