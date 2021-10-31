import { useCart } from "../../Providers/Cart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
const CardProduct = ({ item, remove }) => {
  const { deleteCart, addToCart } = useCart();
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            R$ {item.price}
          </Typography>
        </CardContent>

        {remove ? (
          <Button size="small" onClick={() => deleteCart(item)}>
            Remover do carrinho
          </Button>
        ) : (
          <Button size="small" onClick={() => addToCart(item)}>
            Adicionar ao carrinho
          </Button>
        )}
      </Card>
    </>
  );
};

export default CardProduct;
