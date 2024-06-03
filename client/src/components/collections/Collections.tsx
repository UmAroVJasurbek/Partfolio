import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Collections.scss";
import patek from "../../db/resource";
import CollectionBanner from "./CollectionBanner";
import { Link } from "react-router-dom";

const Collections = () => {
  const [itemsPerRow, setItemsPerRow] = useState(5); // Default to 5 items per row
  const { pathname } = useLocation();
  const collection = patek.find((c) => pathname == `/collection/${c.pathname}`);
  useEffect(() => {
    const handleResize = () => {
      const watchesContainer = document.querySelector('.watches') as HTMLElement;
      if (watchesContainer) {
        const containerWidth = watchesContainer.offsetWidth;
        let newItemsPerRow = 5; // Default to 5 items per row
        if (containerWidth <= 400) {
          newItemsPerRow = 1;
        } else if (containerWidth <= 600) {
          newItemsPerRow = 2;
        } else if (containerWidth <= 800) {
          newItemsPerRow = 3;
        } else if (containerWidth <= 1000) {
          newItemsPerRow = 4;
        }
        setItemsPerRow(newItemsPerRow);
      }
    };

    handleResize(); // Call initially to set the initial number of items per row

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <>
    <article className="collections">
     <CollectionBanner />
      <div className="collections_description">
        <h4 className="collections_description_title1">The {collection?.title.toUpperCase()} Collection</h4>
        <h6 className="collections_description_title2">{collection?.motto}</h6>
        <p className="collections_description_text">{collection?.description}</p>
      </div>
      <div className="watches">
        {collection?.products.map(({ id, title, material_code, img }, index) => (
          <Link to={`/collection/${collection?.pathname}/${id}`} key={id}>
            <div className="watch">
              <div className="watch_picture">
                <img src={img} alt="" />
              </div>
              <div className="watch_description">
                <h5>{title}</h5>
                <p>{material_code}</p>
              </div>
            </div>
            {(index + 1) % itemsPerRow === 0 && <hr className="row-separator" />}
          </Link>
        ))}
      </div>
    </article>
    </>
  );
};

export default Collections;
