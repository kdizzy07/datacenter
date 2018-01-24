import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Create from './Create/Create';
import Search from './Search/Search';
import Upload from './Upload/Upload';

import './styles.css';

class MainPanel extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="mainPanelContainer">
                <Route path='/' exact component={Upload} />
                <Route path='/Search' component={Search} />
                <Route path='/Create' component={Create} />
            </div>
        );
    }
}

export default MainPanel;
