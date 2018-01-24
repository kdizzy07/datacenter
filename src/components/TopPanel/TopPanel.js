import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class TopPanel extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="topPanelBody">

                <header className="App-header">
                    <h1 className="App-title">Solush Knowledge Center</h1>
                    <div className="App-by">
                        <span>by</span><img src="https://www.clicksoftware.com/wp-content/uploads/2017/08/Logo_ClickSoftware_white.png"/>
                    </div>
                    <div className="app-links">
                        <Link className={this.getCssClass('Search')} to="/Search">Search</Link>
                        <Link className={this.getCssClass('/')} to="/">Upload</Link>
                        <Link className={this.getCssClass('Create')} to="/Create">Create</Link>
                    </div>
                </header>

            </div>
        );
    }

    getCssClass(name) {

        if (name === '/') {
            if (window.location.href.substr(window.location.href.length-2, 2) === '#/') {
                return 'single-app-link single-app-link-active ';
            } else {
                return 'single-app-link';
            }
        }

        return window.location.href.indexOf(name) > -1 ? 'single-app-link single-app-link-active ' : 'single-app-link'
    }

}

export default TopPanel;
