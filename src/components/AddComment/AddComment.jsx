import React from 'react';

import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from './AddComment.module.scss';

export const AddComment = () => {
   return (
      <>
         <div className={styles.root}>
            <Avatar
               classes={{ root: styles.avatar }}
               src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613172335_89-p-zheltii-fon-gubka-bob-105.jpg"
            />
            <div className={styles.form}>
               <TextField
                  label="Написать комментарий"
                  variant="outlined"
                  maxRows={10}
                  multiline
                  fullWidth
               />
               <Button variant="contained">Отправить</Button>
               <Link to='/'>
                  <Button size="large">Отмена</Button>
               </Link>
            </div>
         </div>
      </>
   );
};
