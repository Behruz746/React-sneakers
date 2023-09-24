import { useState, useEffect, useContext } from "react";
import ContentLoader from "react-content-loader";

// Style
import styles from "./Card.module.scss";

import AppContext from "../../Context";

function Cards({
  id,
  name,
  image,
  price,
  onPlus,
  onFavorite,
  favorited = false,
  dataLoad,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, name, image, price };

  const onClickPlus = () => {
    onPlus(obj);
  };
  
  
  const onClickLike = () => {
    setIsFavorite(!isFavorite);
    onFavorite(obj);
  };
  
  // console.log(obj.parentId);
  // console.log(isItemAdded(id));

  return (
    <>
      <div className={styles.card}>
        {dataLoad ? (
          <ContentLoader
            speed={2}
            width={150}
            height={187}
            viewBox="0 0 150 187"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="31" cy="31" r="15" />
            <rect x="0" y="123" rx="8" ry="8" width="93" height="15" />
            <rect x="0" y="99" rx="8" ry="8" width="150" height="15" />
            <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
            <rect x="117" y="139" rx="8" ry="8" width="32" height="32" />
            <rect x="0" y="149" rx="8" ry="8" width="80" height="24" />
          </ContentLoader>
        ) : (
          <>
            <div className={styles.favorite}>
              <img
                src={isFavorite ? "./img/heart-active.svg" : "./img/heart.svg"}
                alt="heart"
                onClick={onClickLike}
              />
            </div>
            <img width={133} height={112} src={image} alt="Shoes image" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column mt-15">
                <span>ЦЕНА:</span>
                <b>{price}руб.</b>
              </div>

              {onPlus && (
                <img
                  className={styles.plus}
                  onClick={onClickPlus}
                  width={32}
                  height={32}
                  src={isItemAdded(id) ? "./img/btn-checked.svg" : "./img/plusIcon.svg"}
                  alt="plus icon"
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cards;
