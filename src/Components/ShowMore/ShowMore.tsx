import React from 'react';
import style from './ShowMore.module.scss'
import ArrowDownIcon from '../../assets/images/ArrowDown.svg'

export const ShowMore = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.button}>
                <div className={style.title}>
                    Show more
                </div>
                <img src={ArrowDownIcon} alt={'Arrow Down'}/>
            </div>

        </div>
    );
};

