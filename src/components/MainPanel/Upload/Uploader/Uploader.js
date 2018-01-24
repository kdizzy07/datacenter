import React, { Component } from 'react';
import './styles.css';
import S3Uploader from "./S3Uploader";


export default class Uploader extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <S3Uploader/>
            </div>
        );

    }



}
