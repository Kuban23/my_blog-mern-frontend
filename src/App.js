import Container from "@mui/material/Container";


import { Header } from "./components/Header/Header";
import { Login } from "./pages/Login/Login";
import { Registration } from "./pages/Registration/Registration";
import { AddPost } from "./pages/AddPost/AddPost";
import { Home } from "./pages/Home/Home";


function App() {
   return (
      <>
         <Header />
         <Container maxWidth="lg">
            <Home/>
           {/* <Login/>
           <Registration/>
           <AddPost/> */}
         </Container>
      </>
   );
}

export default App;
