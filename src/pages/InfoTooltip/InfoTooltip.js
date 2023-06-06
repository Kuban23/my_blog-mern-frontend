import React from 'react';
// import success from '../image/success.png';
// import fail from '../image/fail.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

import styles from './InfoTooltip.module.scss';
import { SetStateToolTip } from '../../redux/slices/InfoTooltip';

export const InfoTooltip = () => {
  const isAuth = useSelector((state) => Boolean(state.auth.data));
  const toolTipState = useSelector((state) => state.toolTip.stateToolTip);
  console.log(toolTipState);
  console.log(isAuth);
  const dispatch = useDispatch();

  const closetoolTip = () => {
    dispatch(SetStateToolTip(false));
  };

  const rootClasses = [styles.root];

  if (toolTipState) {
    rootClasses.push(styles.active);
  }

  return (
    <>
      {toolTipState && (
        <div className={rootClasses.join(' ')}>
          <div className={styles.rootContent}>
            <Typography classes={{ root: styles.title }} variant="h5">
              {isAuth
                ? 'Вы успешно зарегистрировались!'
                : 'Что-то пошло не так! Попробуйте ещё раз.'}
            </Typography>
            <Button onClick={closetoolTip} type="submit" size="large" variant="contained" fullWidth>
              ОК
            </Button>
          </div>
        </div>
        // <div>
        // <Paper classes={{root:rootClasses.join(' ')}}>
        //   <Typography classes={{ root: styles.title }} variant="h5">
        //     {isAuth ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        //   </Typography>
        //   <Button onClick={closetoolTip} type="submit" size="large" variant="contained" fullWidth>
        //     ОК
        //   </Button>
        // </Paper>
        // </div>
      )}
    </>
  );
};

// function InfoTooltip(props) {

//    return (

//       <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
//          <div className="popup__container-infotool">
//             <button className="popup__close popup__close_type_infotool" type="button" aria-label="Кнопка закрытия окна"
//                onClick={props.onClose}></button>
//             <img className="popup__union-image" src={props.onSuccess ? success : fail} alt="Кнопка ДА, кнопка Нет" />
//             <h2 className="popup__title_type_infotool">{props.onSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
//          </div>
//       </section>

//    )

// }

export default InfoTooltip;
