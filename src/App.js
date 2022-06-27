import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { Header, Title, DivProducts } from "./Components/App/AppSyle"
import Card from "./Components/Card/Card";
import StoreBck from "./Assets/Imgs/StoreBck.gif"
import GlobalStyle from "./Styles/GlobalStyle"
import "./App.css"

function App() {
  const fruits = useSelector((state) => state.fruits);

  return (
    <AnimatePresence>
      
        <Header Bck={StoreBck}>
          <Title>Loja do</Title>
          <Title>Jimmy Caolho</Title>
        </Header>
        <DivProducts>
          {fruits.map((prod, index) => <Card prod={prod} key={prod.name}/>)}
        </DivProducts>
        <GlobalStyle />

    </AnimatePresence>
  );
}

export default App;
