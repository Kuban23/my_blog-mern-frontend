import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import styles from './AddPost.module.scss';

export const AddPost = () => {


   return (
      <Paper style={{ padding: 30 }}>
         <Button variant="outlined" size="large">
            Загрузить превью
         </Button>
         <br />
         <br />
         <TextField
            classes={{ root: styles.title }}
            variant="standard"
            placeholder="Заголовок статьи..."
            fullWidth
         />
         <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Тэги" fullWidth />
         <div className={styles.buttons}>
            <Button size="large" variant="contained">
               Опубликовать
            </Button>
            <Button size="large">Отмена</Button>
         </div>
      </Paper>
   );
};