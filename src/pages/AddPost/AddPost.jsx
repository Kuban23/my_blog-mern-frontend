import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

//import 'easymde/dist/easymde.min.css';
import styles from './AddPost.module.scss';
import axios from '../../axios';

export const AddPost = () => {
   // Сотояние для поля редактора SimpleMDE
   const [value, setValue] = React.useState('');

   // Состояние заголовка
   const [title, setTitle] = React.useState('');

   // Состояние тэгов
   const [tags, setTags] = React.useState('');

   // Состояние загружаемой картинки
   const [imageUrl, setImageUrl] = React.useState('');

   const onChange = React.useCallback((value) => {
      setValue(value);
   }, []);

   const options = React.useMemo(
      () => ({
         spellChecker: false,
         maxHeight: '400px',
         autofocus: true,
         placeholder: 'Введите текст...',
         status: false,
         autosave: {
            enabled: true,
            delay: 1000,
         },
      }),
      [],
   );

   // Хук для обращения к инпуту
   const inputFileRef = React.useRef(null);

   // Функция для отслеживания состояния загруженной картинки и загрузки ее на сервер
   const handleChangeFile = async (e) => {
      //console.log(e.target.files) // проверил работает ли ф-я, в консоли вижу выбранный мной файл
      try {
         const formData = new FormData();
         const file = e.target.files[0];
         formData.append('image', file);
         const { data } = await axios.post('/uploads', formData);
         // console.log(data);       
         setImageUrl(data.url);
      } catch (error) {
         console.log(error);
         alert('Произошла ошибка при загрузке файла');
      }
   };

   // Функция для удаления картинки
   const onClickRemoveImage = () => {
      setImageUrl('');
   };

   return (
      <Paper style={{ padding: 30 }}>
         <Button onClick={() => inputFileRef.current.click()} variant="outlined" size="large">
            Загрузить превью
         </Button>
         <input onChange={handleChangeFile} ref={inputFileRef} type="file" hidden />
         {imageUrl && (
            <Button variant="contained" color="error" onClick={onClickRemoveImage}>
               Удалить
            </Button>
         )}
         {imageUrl && (
            <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
         )}
         <br />
         <br />
         <TextField
            classes={{ root: styles.title }}
            variant="standard"
            placeholder="Заголовок статьи..."
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <TextField
            classes={{ root: styles.tags }}
            variant="standard"
            placeholder="Тэги"
            fullWidth
            value={tags}
            onChange={(e) => setTags(e.target.value)}
         />
         <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />
         <div className={styles.buttons}>
            <Button size="large" variant="contained">
               Опубликовать
            </Button>
            <Button size="large">Отмена</Button>
         </div>
      </Paper>
   );
};
