import CartItem from "../cartItem/CartItem";
import { CardItemType } from "./../MainLayout";
import { Wrapper } from "./Cart.styles";

interface Props {
  cartItems: CardItemType[];
  addToCart: (clickItem: CardItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No item in Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
