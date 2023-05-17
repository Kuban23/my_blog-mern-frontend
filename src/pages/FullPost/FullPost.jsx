import React from 'react';

import { Post } from '../../components/Post/Post';
import { AddComment } from '../../components/AddComment/AddComment';
import { CommentsBlock } from '../../components/CommentsBlock/CommentsBlock';

export const FullPost = () => {
   return (
      <>
         <Post
            id={1}
            title="Заголовок поста | Заголовок поста"
            imageUrl="https://telegra.ph/file/0697e7569a0447ec3a9cd.png"
            user={{
               avatarUrl:
                  'https://catherineasquithgallery.com/uploads/posts/2021-02/1613172335_89-p-zheltii-fon-gubka-bob-105.jpg',
               fullName: 'Губка Боб',
            }}
            createdAt={'15 мая 2023 г.'}
            viewsCount={100}
            commentsCount={3}
            tags={['react', 'fun', 'typescript']}
            isFullPost>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim suscipit consequatur
               odio maiores itaque unde pariatur minus eum delectus amet perferendis repudiandae
               architecto asperiores, sunt, et eligendi, blanditiis quo voluptas alias dolorum vero velit
               quod optio. Eaque cum distinctio, nostrum ea aliquam aut corporis minima iure fugiat dolor
               atque.
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
