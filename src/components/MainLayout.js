import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Students from './Home/Students/Students';
import StudentsPage from './StudentsPage/StudentsPage';
import NotFound from './NotFound/NotFound';

const MainLayout = () => {
    return(
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={Students} />
                <Route path="/students" component={StudentsPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default MainLayout;