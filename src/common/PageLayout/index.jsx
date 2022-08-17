import React from 'react';
import {Link} from 'react-router-dom';
import style from './index.module.scss';

const PageLayout = ({children}) => (
    <div>
        <h1 className={style.films_cards_container_title}>
            <Link to='/films_all'>
                <button type='button' className={style.films_cards_container__favourite_films}>See all films</button>
            </Link>

            <Link to='/films_favourite'>
                <button type='button' className={style.films_cards_container__favourite_films}>See your favourite films
                </button>
            </Link>
            <div className={style.films_cards_container}>{children}</div>
        </h1>
    </div>
);


export default PageLayout;
