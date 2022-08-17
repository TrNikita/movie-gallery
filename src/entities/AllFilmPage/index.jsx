import React, {useState, useEffect} from 'react';
import {filmsMock} from 'constants/filmsMock';
import FilmCard from 'common/FilmCard';
import {ALL_FILMS, FAVOURITE_FILMS} from 'constants/constants';
import {fromStorage} from 'utils/fromStorage';
import {toStorage} from 'utils/toStorage';

const AllFilms = () => {
    const [allFilmsList, setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock);
    const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS || []));

    useEffect(() => {
        if (!fromStorage(ALL_FILMS) && !fromStorage(FAVOURITE_FILMS)) {
            toStorage(ALL_FILMS, allFilmsList);
            toStorage(FAVOURITE_FILMS, favouriteFilmsList);
        }
    }, [allFilmsList, favouriteFilmsList]);

    return allFilmsList.map((film) => (
        <React.Fragment key={film.id}>
            <FilmCard
                film={film}
                setAllFilmsList={setAllFilmsList}
                setFavouriteFilmsList={setFavouriteFilmsList}
            />
        </React.Fragment>));
};

export default AllFilms;
