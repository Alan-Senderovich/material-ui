import { Box } from "@mui/material";
import Header from "./sections/Header";
import Main from "./sections/Main";

function App() {
  return (
    <Box className="App" p={4} bgcolor="gray">
      <Header />
      <Main />
    </Box>
  );
}

export default App;
