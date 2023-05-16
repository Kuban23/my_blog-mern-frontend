import React from 'react';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Post.module.scss';
import { UserInfo } from '../../components/UserInfo/UserInfo';
// import { PostSkeleton } from "./Skeleton";

export const Post = ({ id, title, createdAt, imageUrl, user, viewsCount, commentsCount, tags }) => {
   return (
      <div className={styles.root}>
         <div className={styles.editButtons}>
            <IconButton color="primary">
               <EditIcon />
            </IconButton>
            <IconButton color="secondary">
               <DeleteIcon />
            </IconButton>
         </div>

         <img className={styles.image} src={imageUrl} alt={title} />
         <div className={styles.wrapper}>
            {/* <div>UserInfo</div> */}
            <UserInfo {...user} additionalText={createdAt} />
            <div className={styles.indention}>
               <h2 className={styles.title}></h2>
               <ul className={styles.tags}>
                  {tags.map((name) => (
                     <li key={name}>
                        <a href="#">#{name}</a>
                     </li>
                  ))}
               </ul>
               <div className={styles.content}></div>
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
