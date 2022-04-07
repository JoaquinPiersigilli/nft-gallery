import Web3 from "web3";
import { INFURA_PROVIDER, OWNER_ADDRES, DECIMALS } from "../../constants";

export const getETHBalance = () => {
  const web3 = new Web3(INFURA_PROVIDER);
  return web3.eth
    .getBalance(OWNER_ADDRES)
    .then((balanceInWei) =>
      Number(web3.utils.fromWei(balanceInWei)).toFixed(DECIMALS)
    );
};
