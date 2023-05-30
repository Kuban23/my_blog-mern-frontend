import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Registration.module.scss";
import { Navigate } from "react-router-dom";
import { fetchRegister } from "../../redux/slices/auth";


export const Registration = () => {

   const dispatch = useDispatch();
   const isAuth = useSelector((state) => Boolean(state.auth.data));

   const {
      register,
      handleSubmit,
      setError,
      formState: {
         errors,
         isValid
      } } = useForm({
         defaultValues: {
            fullName: 'Ира',
            email: 'ira@ira.ru',
            password: '123456789'
         },
         mode: 'onChange',
      });

   const onSubmit = async (values) => {
      const data = await dispatch(fetchRegister(values));
      if (!data.payload) {
         return alert('Не удалось зарегистрироваться')
      }
      if ('token' in data.payload) {
         window.localStorage.setItem('token', data.payload.token);
      }
   };

   if (isAuth) {
      return <Navigate to='/' />
   };

   return (
      <Paper classes={{ root: styles.root }}>
         <Typography classes={{ root: styles.title }} variant="h5">
            Создание аккаунта
         </Typography>
         <div className={styles.avatar}>
            <Avatar sx={{ width: 100, height: 100 }} />
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
               className={styles.field}
               label="Полное имя"
               fullWidth
               {...register('fullName', { required: 'Укажите свое имя' })}
               error={Boolean(errors.fullName?.message)}
               helperText={errors.fullName?.message}
            />
            <TextField
               className={styles.field}
               label="E-Mail"
               fullWidth
               {...register('email', { required: 'Укажите Вашу почту' })}
               error={Boolean(errors.email?.message)}
               helperText={errors.email?.message}
               type="email"
            />
            <TextField
               className={styles.field}
               label="Пароль"
               fullWidth
               {...register('password', { required: 'Укажите Ваш пароль' })}
               error={Boolean(errors.password?.message)}
               helperText={errors.password?.message}
            />
            <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
               Войти
            </Button>
         </form>
      </Paper>
   );
};