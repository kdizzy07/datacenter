import React, { Component } from 'react';
import './styles.css';
import Uploader from "./Uploader/Uploader";


export default class Upload extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Uploader/>
            </div>
        );

    }



}
