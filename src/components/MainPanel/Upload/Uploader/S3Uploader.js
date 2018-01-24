import React, { Component } from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

export default class S3Uploader extends React.Component {

    handleFinishedUpload = info => {
        console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
    }

    render() {
        const uploadOptions = {
            signingUrl:"/s3/sign",
            server: 'http://localhost:3001',
        }
        const s3Url = 'https://s3.eu-west-1.amazonaws.com/clickpavel/'

        return (
            <DropzoneS3Uploader
                onFinish={this.handleFinishedUpload}
                s3Url={s3Url}
                maxSize={1024 * 1024 * 5}
                upload={uploadOptions}
                className="dropZoneCont" >

            </DropzoneS3Uploader>
        )
    }
}