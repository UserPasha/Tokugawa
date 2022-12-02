import React from 'react';
import style from './SearchAndFilter.module.scss'
import {Search} from "./Search/Search";
import {Filter} from "./Filter/Filter";

export const SearchAndFilter = () => {
    return (
        <div className={style.wrapper}>
            <Search/>
            <Filter/>
        </div>
    );
};

