import { v4 as uuidv4 } from "uuid";

// Buttun component
import GreenBtn from "../GreenButton/GreenBtn";

// Images
import { remove_btn, shoes01 } from "../../assets/index";

// Styles
import styles from "./Drawer.module.scss";

function Drawer({ onClose, cartItems = [] }) {

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.drawer__block}>
          <h2 className="d-flex justify-between">
            Корзина
            <img
              width={32}
              height={32}
              src={remove_btn}
              alt="Remove btn"
              className="cu-p"
              onClick={() => {
                onClose();
              }}
            />
          </h2>

          <div className={styles.items}>
            {cartItems.map((data) => (
              <div className={styles.cart__item} key={uuidv4()}>
                <div
                  style={{ backgroundImage: `url(${data.image})` }}
                  className={styles.cart__item_img}
                ></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{data.name}</p>
                  <b>{data.price} руб.</b>
                </div>

                <img
                  width={32}
                  height={32}
                  src={remove_btn}
                  alt="Remove btn"
                  className={styles.remove__btn}
                  onClick={(e)=> {
                    console.log(e.target.parentElement);
                    console.log("data is:", data);
                    e.target.parentElement.remove();
                  }}
                />
              </div>
            ))}
          </div>

          <div className={styles.cartTotal__block}>
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <GreenBtn title={"Оформить заказ"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
