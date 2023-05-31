import React from 'react';

import { Post } from '../../components/Post/Post';
import { AddComment } from '../../components/AddComment/AddComment';
import { CommentsBlock } from '../../components/CommentsBlock/CommentsBlock';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const FullPost = () => {

   const params = useParams();
   // console.log(params.id)

   const [post, setPost] = React.useState();
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => {
      async function fetchPost() {
         try {
            const res = await axios.get('http://localhost:4444/posts/' + params.id);
            setPost(res.data);
            setIsLoading(false); // если запрос выполнился успешно, то выключаем загрузку
         } catch (error) {
            console.log(error);
            alert('Ошибка при получении статьи');
         }
      }
      fetchPost();
   }, []);

   if (isLoading) {
      return <Post isLoading={isLoading} />;
   }

   return (
      <>
         <Post
            id={post._id}
            title={post.title}
            imageUrl={post.imageUrl ? `http://localhost:4444${post.imageUrl}` : ''}
            user={post.user}
            createdAt={post.createdAt}
            viewsCount={post.viewsCount}
            commentsCount={3}
            tags={post.tags}>
            <p>
               {post.text}
            </p>
         </Post>
         <CommentsBlock
            items={[
               {
                  user: {
                     fullName: 'Вася Аватар',
                     avatarUrl:
                        'https://kuban.newizv.ru/attachments/85a94f19309618dbee8c8a13828ddca93137b6d7/store/crop/0/0/1387/780/1920/0/0/e8b56430ade82541c3b79ef0a29933d9f6bac9c4dae9bc481b882eb4b828/1673611362451.jpg',
                  },
                  text: 'Это тестовый комментарий',
               },
               {
                  user: {
                     fullName: 'Губка Боб',
                     avatarUrl:
                        'https://catherineasquithgallery.com/uploads/posts/2021-02/1613172335_89-p-zheltii-fon-gubka-bob-105.jpg',
                  },
                  text: 'Это второй тестовый комментарий',
               },
            ]}
            isLoading={false}>
            <AddComment />
         </CommentsBlock>
      </>
   );
};
