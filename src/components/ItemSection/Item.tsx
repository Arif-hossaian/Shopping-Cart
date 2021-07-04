import { Button } from "@material-ui/core";
import { CardItemType } from "../MainLayout";
import { Wrapper } from "./Item.styled";

interface Props {
  item: CardItemType;
  handleAddToCart: (clickItem: CardItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
 
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </Button>
    </Wrapper>

);

export default Item;
