import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Link } from 'react-router-dom';

import styles from './Post.module.scss';
import { UserInfo } from '../../components/UserInfo/UserInfo';
import { PostSkeleton } from '../../components/Post/Skeleton';
import { useDispatch } from 'react-redux';
import { fetchRemovePost } from '../../redux/slices/posts';

export const Post = ({
   id,
   title,
   createdAt,
   imageUrl,
   user,
   viewsCount,
   commentsCount,
   tags,
   isLoading,
   children,
   isOwner
}) => {

const dispatch=useDispatch();

   if (isLoading) {
      return <PostSkeleton />;
   }

// Функция удаления поста
const removePost = () => {
   if (window.confirm('Вы действительно хотите удалить статью?')) {
     dispatch(fetchRemovePost(id));
   }
 };

   return (
      <div className={styles.root}>
         {
            isOwner &&
            <div className={styles.editButtons}>
               <Link to={`/posts/${id}/edit`}>
                  <IconButton color="primary">
                     <EditIcon />
                  </IconButton>
               </Link>
               <IconButton onClick={removePost} color="secondary">
                  <DeleteIcon />
               </IconButton>
            </div>
         }

         <img className={styles.image} src={imageUrl} alt={title} />
         <div className={styles.wrapper}>
            {/* <div>UserInfo</div> */}
            <UserInfo {...user} additionalText={createdAt} />
            <div className={styles.indention}>
               <h2 className={styles.title}>
                  <Link to={`/posts/${id}`}>{title}</Link>
               </h2>
               <ul className={styles.tags}>
                  {tags.map((name) => (
                     <li key={name}>
                        <a href="#">#{name}</a>
                     </li>
                  ))}
               </ul>
               <div className={styles.content}>
                  {children}
               </div>
               <ul className={styles.postDetails}>
                  <li>
                     <EyeIcon />
                     <span>{viewsCount}</span>
                  </li>
                  <li>
                     <CommentIcon />
                     <span>{commentsCount}</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};
