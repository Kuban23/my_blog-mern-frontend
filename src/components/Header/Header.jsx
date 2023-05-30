import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth";


export const Header = () => {

   const dispatch = useDispatch();
   const isAuth = useSelector((state) => Boolean(state.auth.data));
   const userData = useSelector((state) => state.auth.data);

   const onClickLogout = () => {
      if (window.confirm('Вы действительно хотите выйти')) {
         dispatch(logout());
         window.localStorage.removeItem('token');
      }
   };

   return (
      <div className={styles.root}>
         <Container maxWidth="lg">
            <div className={styles.inner}>
               <Link className={styles.logo} to="/">
                  <div>MY BLOG</div>
               </Link>
               <div className={styles.buttons}>
                  {isAuth ?
                     <div className={styles.wrapper}>
                     <Link to="/add-post" style={{ textDecoration: 'none' }}>
                       <Button variant="contained">Написать статью</Button>
                     </Link>
                     <Button onClick={onClickLogout} variant="contained" color="error">
                       Выйти
                     </Button>
                     <img className={styles.avatar} src={userData.avatarUrl} alt="аватар" />
     
                     <p className={styles.name}>{userData.fullName}</p>
                   </div>
                     :
                     <>
                        <Link to='login'>
                           <Button variant="outlined">Войти</Button>
                        </Link>
                        <Link to='/register'>
                        <Button  variant="contained">Создать аккаунт</Button>
                        </Link>
                        
                     </>
                  }


               </div>
            </div>
         </Container>
      </div>
   );
};