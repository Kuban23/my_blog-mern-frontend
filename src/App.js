import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Login } from "./pages/Login/Login";
import { Registration } from "./pages/Registration/Registration";
import { AddPost } from "./pages/AddPost/AddPost";
import { Home } from "./pages/Home/Home";
import {FullPost} from "./pages/FullPost/FullPost";

function App() {
   return (
      <>
         <Header />
         <Container maxWidth="lg">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Registration />} />
               <Route path="/add-post" element={<AddPost />} />
               <Route path="/posts/:id" element={<FullPost/>} />
            </Routes>


         </Container>
      </>
   );
}

export default App;
