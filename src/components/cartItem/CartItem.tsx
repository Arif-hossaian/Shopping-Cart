import { Button } from "@material-ui/core";
import { CardItemType } from "../MainLayout";
import { Wrapper } from "./CartItem.styles";

interface Props {
  item: CardItemType;
  addToCart: (clickItem: CardItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            variant="contained"
            disableElevation
            onClick={() => removeFromCart(item.id)}
          >
            <span style={{fontSize: "30px"}}>-</span>
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            variant="contained"
            disableElevation
            onClick={() => addToCart(item)}
          >
            <span style={{fontSize: "30px"}}>+</span>
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
