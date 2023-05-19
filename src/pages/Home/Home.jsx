import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../components/Post/Post';
import { TagsBlock } from '../../components/TagsBlock/TagsBlock';
import { CommentsBlock } from '../../components/CommentsBlock/CommentsBlock';
import { fetchPosts, fetchTags } from '../../redux/slices/posts';



export const Home = () => {

   const dispatch = useDispatch();
   const { posts, tags } = useSelector((state) => state.posts);
   // console.log(posts)

   React.useEffect(() => {
      dispatch(fetchPosts());
      dispatch(fetchTags());
   }, []);

   //Переменная для отслеживания статуса загрузки
   const isPostsLoading = posts.status === 'loading';
   const isPTagsLoading = tags.status === 'loading';

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
               {(isPostsLoading ? [...Array(3)] : posts.items).map((obj, index) =>
                  isPostsLoading ? (
                     <Post isLoading={true} key={index} />
                  ) : (
                     <Post
                        id={obj._id}
                        title={obj.title}
                        imageUrl={obj.imageUrl}
                        // imageUrl="https://telegra.ph/file/0697e7569a0447ec3a9cd.png"
                        user={obj.user}
                        createdAt={obj.createdAt}
                        viewsCount={obj.viewsCount}
                        commentsCount={3}
                        tags={obj.tags}
                        isEditable
                     />
                  ))}
            </Grid>
            <Grid xs={4} item>
               {/* <div>TagsBlock</div> */}
               <TagsBlock items={tags.items} isLoading={isPTagsLoading} />
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
