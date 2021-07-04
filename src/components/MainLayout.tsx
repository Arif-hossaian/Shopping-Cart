import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { useQuery } from "react-query";
import Item from "./ItemSection/Item";
import { Wrapper, StyledButton } from "../styles/App.styles";
import { useState } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import Cart from "./cart/Cart";

//Types
export interface CardItemType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}
const getProducts = async (): Promise<CardItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const MainLayout = () => {
  const [cartisOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CardItemType[]);
  const { data, isLoading, error } = useQuery<CardItemType[]>(
    "products",
    getProducts
  );
  console.log(data);
  const getTotalItems = (items: CardItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const handleAddToCart = (clickItem: CardItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Somthing wrong </div>;
  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={cartisOpen}
        onClose={() => setCartIsOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartIsOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default MainLayout;
