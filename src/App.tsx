import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      className="App"
      minH={"100vh"}
      bgGradient={"linear(to-br, white, orange.100)"}
    >
      <Header />
      <Main />
    </Box>
  );
}

export default App;
