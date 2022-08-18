import React, {useState} from 'react';
import {fromStorage} from '../../utils/fromStorage';
import {ALL_FILMS, FAVOURITE_FILMS} from '../../constants/constants';
import FilmCard from '../../common/FilmCard';
import {filmsMock} from '../../constants/filmsMock';

const FavouriteFilms = () => {

    const [allFilmsList, setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock);
    const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS || []));


    return favouriteFilmsList.length ? (
            favouriteFilmsList.map((film) => (<React.Fragment key={film.id}>
                <FilmCard
                    film={film}
                    setAllFilmsList={setAllFilmsList}
                    setFavouriteFilmsList={setFavouriteFilmsList}
                />
            </React.Fragment>))
        )
        : (<div>List is empty</div>);

};

export default FavouriteFilms;
