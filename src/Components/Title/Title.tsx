import React, {FC} from 'react';
import style from './Title.module.scss'

type TitleType = {
    text: string
}

export const Title:FC<TitleType> = ({text}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                {text}
            </div>
        </div>
    );
};

