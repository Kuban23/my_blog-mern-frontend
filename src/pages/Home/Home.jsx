import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../../components/Post/Post';
import { TagsBlock } from '../../components/TagsBlock/TagsBlock';
import { CommentsBlock } from '../../components/CommentsBlock/CommentsBlock';

export const Home = () => {
   return (
      <>
         <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example"

         >
            <Tab
               label={<span style={{ color: 'white' }}>Новые</span>}
            />
            <Tab label={<span style={{ color: 'white' }}>Популярные</span>} />

         </Tabs>
         <Grid container spacing={4}>
            <Grid xs={8} item>
               {[...Array(3)].map(() => (
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
                     isEditable
                     
                  />
               ))}
            </Grid>
            <Grid xs={4} item>
               {/* <div>TagsBlock</div> */}
               <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false} />
               {/* <div>CommentsBlock</div> */}
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
                  isLoading={false}
               />
            </Grid>
         </Grid>
      </>
   );
};
