import React from 'react';
import style from './Navbar.module.scss'
import {SvgComponent} from "../../assets/images/SVGComponents/SVGComponent";

export const Navbar = () => {
    const postPath = "M0 0V8H8V0H0ZM6 6H2V2H6V6ZM0 10V18H8V10H0ZM6 16H2V12H6V16ZM10 0V8H18V0H10ZM16 6H12V2H16V6ZM10 10V18H18V10H10ZM16 16H12V12H16V16Z"
    const postHeight = "18"
    const postViewBox = '0 0 18 18'
    const blogPath = "M0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4ZM0 6H2V4H0V6ZM0 10H2V8H0V10ZM0 2H2V0H0V2ZM4 6H18V4H4V6ZM4 10H18V8H4V10ZM4 0V2H18V0H4Z"
    const blogHeight = "10"
    const blogViewBox = "0 0 18 10"
    const activeColor = "#F8346B"
    const regularColor= '#1A1718'

    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <SvgComponent color={regularColor} path={blogPath} height={blogHeight} viewBox={blogViewBox}/>

                <div className={style.title}>
                    Blogs
                </div>
            </div>

            <div className={style.item}>
                <SvgComponent color={activeColor} path={postPath} height={postHeight} viewBox={postViewBox}/>

                <div className={style.title}>
                    Posts
                </div>
            </div>
        </div>
    );
};

