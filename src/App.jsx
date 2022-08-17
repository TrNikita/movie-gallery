import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PageLayout from './common/PageLayout';
import './styles/index.scss';
import AllFilmPage from './entities/AllFilmPage';
import FavouriteFilmPage from './entities/FavouriteFilmPage';

const App = () =>
    <Switch>
        <PageLayout>
            <Route path='/films_all'>
                <AllFilmPage/>
            </Route>
            <Route path='/films_favourite'>
                <FavouriteFilmPage/>
            </Route>
        </PageLayout>
    </Switch>;

export default App;
