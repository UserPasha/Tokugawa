import React from 'react';
import style from './Blog.module.scss'

export const Blog = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.imageWrapper}>

            </div>
            <div className={style.content}>
                <div className={style.title}>Title</div>
                <div className={style.webSite}>Website: </div>
                <div className={style.description}>description</div>

            </div>

        </div>
    );
};
