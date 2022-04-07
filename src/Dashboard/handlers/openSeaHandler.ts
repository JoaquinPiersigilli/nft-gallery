import axios from "axios";
import { OpenSeaAsset } from "../../OpenSeaTypes";

type AssetsResponse = {
  assets: OpenSeaAsset[];
  next: string | undefined;
  previous: string | undefined;
};

const OPENSEA_URL_V1 = "https://api.opensea.io/api/v1/";

const createUrl = (owner: string, limit: number) => {
  const params: { [string: string]: string | number } = { owner, limit };
  const queryString = Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");

  return OPENSEA_URL_V1 + "assets?" + queryString;
};

export const getAssetsFromAddress = async (address: string, limit: number) => {
  return await axios
    .get<AssetsResponse>(createUrl(address, limit))
    .then((answer) => answer.data);
};
