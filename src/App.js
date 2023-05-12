import Container from "@mui/material/Container";


import { Header } from "./components/Header/Header";
import { Login } from "./pages/Login/Login";


function App() {
   return (
      <>
         <Header />
         <Container maxWidth="lg">
           <Login/>
         </Container>
      </>
   );
}

export default App;
