import styled from "styled-components";

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <img
        src="https://constellationnetwork.io/wp-content/uploads/2021/04/Constellation-Logo_White.png"
        width="auto"
        height="auto"
        alt="Constellation Logo"
      />
      <Badge>
        <EthAmount>3.9913 ETH</EthAmount>
      </Badge>
    </HeaderWrapper>
  );
};

const Badge = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(218, 165, 32, 0.2);
  border-radius: 10px;
  font-weight: 600;
`;

const EthAmount = styled.h5`
  margin: 0;
  padding: 0;
  color: gold;
`;

const HeaderWrapper = styled.div`
  height: 60px;
  display: block;
  z-index: 100;
  position: static;
  box-sizing: border-box;
  border-bottom: 1px solid #e9ecef;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  padding: 16px;
  display: flex;
  background-color: #00152f;

  justify-content: space-between;
`;

export default HeaderComponent;
