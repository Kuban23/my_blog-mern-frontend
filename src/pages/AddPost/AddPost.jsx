import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import styles from './AddPost.module.scss';
import axios from '../../axios';
import { useNavigate, useParams } from 'react-router-dom';

export const AddPost = () => {

   const navigate = useNavigate();

   // Сотояние для поля редактора SimpleMDE
   const [text, setText] = React.useState('');

   // Состояние заголовка
   const [title, setTitle] = React.useState('');

   // Состояние тэгов
   const [tags, setTags] = React.useState('');

   // Состояние загрузки поста
   const [isLoading, setLoading] = React.useState(false);

   // Состояние загружаемой картинки
   const [imageUrl, setImageUrl] = React.useState('');

   const onChange = React.useCallback((value) => {
      setText(value);
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



   const addPost = async () => {
      try {
         setLoading(true);
         const filds = {
            title,
            tags,
            text,
            imageUrl
         }
         const { data } = isEditing
            ? await axios.patch(`/posts/${params.id}`, filds)
            : await axios.post('/posts', filds)

         const _id = isEditing ? params.id : data._id
         navigate(`/posts/${_id}`)
      } catch (error) {
         console.log(error);
         alert('Не удалось загрузить статью!')
      }
   };

   const params = useParams();

   const isEditing = Boolean(params.id);

   React.useEffect(() => {
      if (params.id) {
         axios.get(`/posts/${params.id}`)
            .then((res) => {
               setTitle(res.data.title);
               setTags(res.data.tags);
               setImageUrl(res.data.imageUrl);
               setText(res.data.text);
            })
            .catch((error) => {
               console.log(error);
               alert('Ошибка при получении статьи');
            });
      }
   }, []);



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
         <SimpleMDE className={styles.editor} value={text} onChange={onChange} options={options} />
         <div className={styles.buttons}>
            <Button onClick={addPost} size="large" variant="contained">
               {isEditing ? 'Сохранить' : 'Опубликовать'}
            </Button>
            <Button size="large">Отмена</Button>
         </div>
      </Paper>
   );
};
