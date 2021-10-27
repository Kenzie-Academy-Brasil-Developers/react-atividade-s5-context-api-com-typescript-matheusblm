import "./App.css";
import CardProduct from "./Components/CardProduct";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useCart } from "./Providers/Cart";

function App() {
  const products = [
    {
      id: 11,
      title: "Samsung Galaxy A01 Dual SIM 32 GB preto 2 GB RAM",
      description:
        "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
      price: 699.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_661764-MLA44282592265_122020-O.webp",
    },
    {
      id: 12,
      title: "Xiaomi Redmi 9A Dual SIM 32 GB azul 2 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 799.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_958898-MLA43824398273_102020-O.webp",
    },
    {
      id: 13,
      title: "LG K11+ Dual SIM 32 GB dourado 3 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 859.1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_633672-MLA31348110302_072019-O.webp",
    },
    {
      id: 45,
      title: 'iPhone 11 Apple (64GB) Branco Tela 6,1" 4G Câmera 12MP iOS',
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      price: 3899.99,
      image:
        "https://images-americanas.b2w.io/produtos/01/00/img/1614132/3/1614132374_1GG.jpg",
    },
  ];
  const { cart } = useCart();

  return (
    <div className="App">
      <header className="App-header">
        <Typography gutterBottom variant="h5" component="div">
          Produtos
        </Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={4}>
              {products.map((item, index) => (
                <Grid key={index} item>
                  <CardProduct item={item} remove={false} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h5" component="div">
          Carrinho
        </Typography>

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={4}>
              {cart.map((item, index) => (
                <Grid key={index} item>
                  <CardProduct item={item} remove={true} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
