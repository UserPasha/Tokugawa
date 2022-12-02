import React from 'react';
import style from './Filter.module.scss'

export const Filter = () => {
    return (
        <div className={style.wrapper}>
            <select className={style.select}>
                <option>New blog first</option>
                <option>Old blog first</option>
                <option>From A to Z</option>
                <option>From Z to A</option>
            </select>
        </div>
    );
};

