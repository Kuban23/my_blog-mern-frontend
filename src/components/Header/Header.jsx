import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";


export const Header = () => {

   const isAuth = false;

   return (
      <div className={styles.root}>
         <Container maxWidth="lg">
            <div className={styles.inner}>
               <Link className={styles.logo} to="/">
                  <div>MY BLOG</div>
               </Link>
               <div className={styles.buttons}>
                  {isAuth ?
                     <>
                        <Link to="/posts/create">
                           <Button variant="contained">Написать статью</Button>
                        </Link>
                        <Button variant="contained" color="error">
                           Выйти
                        </Button>
                     </>
                     :
                     <>
                        <Link to='login'>
                           <Button variant="outlined">Войти</Button>
                        </Link>
                        <Button variant="contained">Создать аккаунт</Button>
                     </>
                  }


               </div>
            </div>
         </Container>
      </div>
   );
};