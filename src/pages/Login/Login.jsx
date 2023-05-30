import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form';

import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {

   const dispatch = useDispatch();
   const isAuth = useSelector((state) => Boolean(state.auth.data));
   // console.log(isAuth)


   const {
      handleSubmit,
      register,
      formState: {
         errors,
         isValid,
      } } = useForm({
         defaultValues: {
            email: 'ira@ira.ru',
            password: '123456789'
         },
         mode: 'onChange'
      });


   const onSubmit = async (values) => {
      // console.log(dispatch(fetchAuth(values)))
      const data = await dispatch(fetchAuth(values))
      //console.log(data)
      if (!data.payload) {
         return alert('Не удалось авторизоваться')
      }
      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token)
      }
   };

   if (isAuth) {
      return <Navigate to='/' />
   };

   return (
      <Paper classes={{ root: styles.root }}>
         <Typography classes={{ root: styles.title }} variant="h5">
            Вход в аккаунт
         </Typography>
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
               className={styles.field}
               label="E-Mail"
               error={Boolean(errors.email?.message)}
               helperText={errors.email?.message}
               fullWidth
               {...register('email', { required: 'Укажите Вашу почту' })}
               type="email"
            />
            <TextField
               className={styles.field}
               label="Пароль"
               fullWidth
               {...register('password', { required: 'Укажите Ваш пароль' })}
               helperText={errors.password?.message}
               error={Boolean(errors.password?.message)} 
            />
            <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
               Войти
            </Button>
         </form>
      </Paper>
   );
};

