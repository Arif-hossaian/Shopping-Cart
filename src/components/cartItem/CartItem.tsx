import {CardItemType} from "../MainLayout"
import { Wrapper } from "./CartItem.styles"

interface Props {
    item: CardItemType;
    addToCart: (clickItem: CardItemType) => void;
    removeFromCart: (id: number) => void;
  };

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
    return (
        <Wrapper>
            cartitems
        </Wrapper>
    )
}

export default CartItem
