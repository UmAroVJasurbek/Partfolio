import { useLocation } from "react-router-dom";
import patek from "../../db/resource";
import './CollectionBanner.scss'

const CollectionBanner = () => {
    const { pathname } = useLocation();
    const collection = patek.find((c) => pathname == `/collection/${c.pathname}`);
    const title = collection?.title;
    const banner_image = collection?.banner_image;
  return (
    <div className="collections_banner_wrapper">
    <div className="banner_overlay"></div>
    <div className="collections_banner" style={{"backgroundImage": `url(${banner_image})`}}>
      <h2 className="collections_banner_title">{title}</h2>
    </div>
  </div>
  )
}

export default CollectionBanner
