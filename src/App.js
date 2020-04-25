import React, { Fragment, useEffect } from 'react';

// bring in components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

// bring in redux
import { Provider } from 'react-redux';
import store from './store';

// bring in materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
    useEffect(() => {
        // init materialize JS
        M.AutoInit();
    });
    return (
        <Provider store={store}>
            <Fragment>
                <SearchBar />
                <div className='container'>
                    <AddBtn />
                    <AddLogModal />
                    <EditLogModal />
                    <AddTechModal />
                    <TechListModal />
                    <Logs />
                </div>
            </Fragment>
        </Provider>
    );
};

export default App;
