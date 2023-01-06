import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import { Box } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineInfoCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function App() {
  return (
    <Box
      className="App"
      minH={"100vh"}
      bgGradient={"linear(to-br, white, orange.100)"}
    >
      <Header title="Fur-ever Friends">
        <Header.NavAction label="Home" icon={AiOutlineHome} to="/" />
        <Header.NavAction
          label="Shopping"
          icon={AiOutlineShopping}
          to="/shopping"
        />
        <Header.NavAction
          label="About"
          icon={AiOutlineInfoCircle}
          to="/about"
        />
        <Header.NavAction
          label="Cart"
          icon={AiOutlineShoppingCart}
          to="/cart"
          count={1}
        />
      </Header>
      <Main />
    </Box>
  );
}

export default App;
