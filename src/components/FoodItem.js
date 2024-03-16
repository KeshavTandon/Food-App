import { IMG_CDN_URL } from "../components/constants";

const cart_item = ({
  imageId,
  name,
}) => {
  return (
    <div className="cart_item">
      <img className="cart_img" src={IMG_CDN_URL + imageId} />
      <h4>{name}</h4>
    </div>
  );
};

export default cart_item;