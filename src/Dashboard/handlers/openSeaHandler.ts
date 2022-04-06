import axios from "axios";

type Props = {
  address: string,
  limit: string
}

//define types

export const getAssetsFromAddress = ({address, limit}:Props) => {
  axios
      .get(
        `https://api.opensea.io/api/v1/assets?&owner=${address}&order_direction=desc&limit=${limit}&include_orders=false`
      )
      .then((collection: any) => {
        const assets = collection.data.assets.map(
          ({ name, image_url, description }: any) => ({
            name,
            image_url,
            description,
          })
        );
        //dispatch redux action
      });
}
