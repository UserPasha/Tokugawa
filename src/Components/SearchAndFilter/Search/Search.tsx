import React from 'react';
import style from './Search.module.scss'
import Search_icon from './../../../assets/images/Search_icon.svg'

export const Search = () => {
    return (
        <div className={style.wrapper}>
            <img src={Search_icon} alt={"Search icon"}/>
            <input className={style.input}
                   type={"text"}
                   placeholder={"Search"}
            />
        </div>
    );
};

